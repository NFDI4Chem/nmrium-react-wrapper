/* eslint-disable @typescript-eslint/no-explicit-any */
import Zip from 'jszip';
import {
  FILES_TYPES,
  getFileExtension,
} from 'nmrium/lib/component/utility/FileUtility';
import { addBruker, addJcamp, addJDF } from 'nmrium/lib/data/SpectraManager';
import { addMolfile } from 'nmrium/lib/data/molecules/MoleculeManager';
import { useCallback, useMemo, useState } from 'react';
import { Datum1D } from 'nmrium/lib/data/types/data1d';
import { Datum2D } from 'nmrium/lib/data/types/data2d';
import { Molecule } from 'nmrium/lib/data/molecules/Molecule';
import events from '../events';
import { isArrayOfString } from '../utilities/isArrayOfString';
import { isArrayOfFile } from '../utilities/isArrayOfFile';
import { isBruker } from '../utilities/isBruker';
import { castToPromise } from '../utilities/castToPromise';
import { loadFilesFromURLs } from '../utilities/loadFilesFromURLs';
import { flatArray } from '../utilities/flatArray';

type Spectrum = Datum1D | Datum2D;

interface FileMeta {
  extension?: string;
  name: string;
}
export interface File extends FileMeta {
  data: ArrayBuffer;
}

async function flatFiles(files: File[]) {
  const result: File[] = [];
  const zipFiles = files.filter(
    ({ extension }) => extension === FILES_TYPES.ZIP,
  );

  const unZipFiles = await Promise.all(
    zipFiles.map((file) => Zip.loadAsync(file.data)),
  );

  const data = await Promise.all(
    unZipFiles.reduce<(Promise<Uint8Array> | ArrayBuffer | FileMeta)[]>(
      (promises, unZipFile, index) => {
        if (isBruker(unZipFile.files)) {
          promises.push(zipFiles[index].data);
          promises.push({ ...(zipFiles[index] as FileMeta) });
        }
        // eslint-disable-next-line no-restricted-syntax
        for (const file of Object.values(unZipFile.files)) {
          const extension = getFileExtension(file.name);
          if (
            [
              FILES_TYPES.JDX,
              FILES_TYPES.DX,
              FILES_TYPES.JDF,
              FILES_TYPES.MOL,
            ].includes(extension)
          ) {
            promises.push(file.async('uint8array'));
            promises.push({ name: file.name, extension });
          }
        }
        return promises;
      },
      [],
    ),
  );

  for (let i = 0; i < data.length; i += 2) {
    result.push({
      data: data[i] as ArrayBuffer,
      ...(data[i + 1] as FileMeta),
    });
  }
  return result;
}

async function mapFiles(files: File[]): Promise<File[]> {
  const sortFiles = files.reduce<{
    zipFiles: File[];
    files: File[];
  }>(
    (filesAcc, file) => {
      const fileObject = { ...file, extension: getFileExtension(file.name) };
      if (fileObject.extension === FILES_TYPES.ZIP) {
        filesAcc.zipFiles.push(fileObject);
      } else {
        filesAcc.files.push(fileObject);
      }
      return filesAcc;
    },
    { zipFiles: [], files: [] },
  );
  const zipFiles = await flatFiles(sortFiles.zipFiles);

  return zipFiles.concat(sortFiles.files);
}

async function processFiles(files: File[]) {
  const usedColors = { '1d': [], '2d': [] };

  const callPromises = files.reduce<{
    spectra: Promise<any>[];
    molecules: Promise<any>[];
  }>(
    (promises, { data: file, extension }) => {
      switch (extension) {
        case FILES_TYPES.JDX:
        case FILES_TYPES.DX: {
          promises.spectra.push(castToPromise(addJcamp, file, {}, usedColors));
          break;
        }
        case FILES_TYPES.JDF: {
          promises.spectra.push(castToPromise(addJDF, file, {}, usedColors));
          break;
        }
        case FILES_TYPES.ZIP: {
          promises.spectra.push(addBruker({}, file, usedColors));
          break;
        }
        case FILES_TYPES.MOL: {
          const decoder = new TextDecoder('utf8');
          const molfile = decoder.decode(file);
          promises.molecules.push(castToPromise(addMolfile, molfile));
          break;
        }

        default:
          throw new Error('The file extension must be zip, dx, jdx, jdf');
      }
      return promises;
    },
    { spectra: [], molecules: [] },
  );
  const spectraList = (await Promise.all(callPromises.spectra)) as Spectrum[][];
  const moleculesList = (await Promise.all(
    callPromises.molecules,
  )) as Molecule[][];

  const spectra = flatArray<Spectrum>(spectraList);
  const molecules = flatArray<Molecule>(moleculesList);

  return { spectra, molecules };
}

export function useLoadSpectra() {
  const [data, setData] = useState<{
    spectra: Spectrum[];
    molecules: Molecule[];
  }>({ spectra: [], molecules: [] });
  const [isLoading, setLoading] = useState<boolean>(false);

  const load = useCallback(
    async (options: { urls: string[] } | { files: File[] }) => {
      setLoading(true);
      try {
        let inputFiles: File[] = [];

        if ('urls' in options) {
          if (isArrayOfString(options.urls)) {
            inputFiles = await loadFilesFromURLs(options.urls);
          } else {
            throw new Error('The input must be string[] ');
          }
        } else if ('files' in options) {
          if (!isArrayOfFile(options.files)) {
            throw new Error('The input must be File[] ');
          }
          inputFiles = options.files;
        }

        const files = await mapFiles(inputFiles);

        const { spectra, molecules } = await processFiles(files);
        setData({ spectra, molecules });
      } catch (error: any) {
        events.trigger('error', error);
        // eslint-disable-next-line no-console
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [],
  );

  return useMemo(
    () => ({
      data,
      load,
      isLoading,
    }),
    [data, isLoading, load],
  );
}
