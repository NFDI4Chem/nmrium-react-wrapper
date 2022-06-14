/* eslint-disable no-restricted-syntax */
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

type Spectrum = Datum1D | Datum2D;

interface LoadFile {
  value: ArrayBuffer;
  extension: string;
}

export function loadFromURLs(urls: string[]): Promise<LoadFile[]> {
  const fetches = urls.map((url) =>
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((value) => {
        return { value, extension: getFileExtension(url) };
      }),
  );

  return Promise.all(fetches);
}

function castToPromise(func, ...props) {
  return new Promise((resolve) => {
    const spectra = [];
    func(spectra, ...props);
    resolve(spectra);
  });
}

function flatArray<T>(list: Array<T[]>): T[] {
  if (!list || list.length === 0) {
    return [];
  }

  return list.reduce((acc, data) => {
    if (data) {
      return acc.concat(data as T[]);
    }
    return acc;
  }, []);
}

function isBruker(files) {
  return Object.keys(files).some((path) =>
    ['2rr', 'fid', '1r'].some((brukerFile) => path.endsWith(brukerFile)),
  );
}

async function flatFiles(files: LoadFile[]) {
  const result: LoadFile[] = [];

  const zipFiles = files.filter(
    ({ extension }) => extension === FILES_TYPES.ZIP,
  );

  for (const zipFile of zipFiles) {
    // eslint-disable-next-line no-await-in-loop
    const unZipFiles = await Zip.loadAsync(zipFile.value);
    if (isBruker(unZipFiles.files)) {
      result.push(zipFile);
    }

    for (const file of Object.values(unZipFiles.files)) {
      const extension = getFileExtension(file.name);
      if (
        [
          FILES_TYPES.JDX,
          FILES_TYPES.DX,
          FILES_TYPES.JDF,
          FILES_TYPES.MOL,
        ].includes(extension)
      ) {
        // eslint-disable-next-line no-await-in-loop
        const value = await file.async('uint8array');
        result.push({ value, extension });
      }
    }
  }

  return result;
}

export function useLoadSpectraFromURL() {
  const [data, setData] = useState<{
    spectra: Spectrum[];
    molecules: Molecule[];
  }>({ spectra: [], molecules: [] });
  const [isLoading, setLoading] = useState<boolean>(false);

  const load = useCallback(async (urls: string[]) => {
    setLoading(true);
    const loadedFiles = await loadFromURLs(urls);

    const sortFiles = loadedFiles.reduce<{
      zipFiles: LoadFile[];
      files: LoadFile[];
    }>(
      (filesAcc, file) => {
        if (file.extension === FILES_TYPES.ZIP) {
          filesAcc.zipFiles.push(file);
        } else {
          filesAcc.files.push(file);
        }
        return filesAcc;
      },
      { zipFiles: [], files: [] },
    );
    const zipFiles = await flatFiles(sortFiles.zipFiles);

    const files = [...zipFiles, ...sortFiles.files];

    const usedColors = { '1d': [], '2d': [] };

    try {
      const callPromises = files.reduce<{
        spectra: Promise<any>[];
        molecules: Promise<any>[];
      }>(
        (promises, { value: file, extension }) => {
          switch (extension) {
            case FILES_TYPES.JDX:
            case FILES_TYPES.DX: {
              promises.spectra.push(
                castToPromise(addJcamp, file, {}, usedColors),
              );
              break;
            }
            case FILES_TYPES.JDF: {
              promises.spectra.push(
                castToPromise(addJDF, file, {}, usedColors),
              );
              break;
            }
            case FILES_TYPES.ZIP: {
              promises.spectra.push(addBruker({}, file, usedColors));
              break;
            }
            case FILES_TYPES.MOL: {
              const decoder = new TextDecoder('utf8');
              const molfile = decoder.decode(file);
              console.log(molfile);
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
      const spectraList = (await Promise.all(
        callPromises.spectra,
      )) as Spectrum[][];
      const moleculesList = (await Promise.all(
        callPromises.molecules,
      )) as Molecule[][];

      const spectra = flatArray<Spectrum>(spectraList);
      const molecules = flatArray<Molecule>(moleculesList);

      setData({ spectra, molecules });
    } catch (error: any) {
      events.trigger('error', error);
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return useMemo(
    () => ({
      data,
      load,
      isLoading,
    }),
    [data, isLoading, load],
  );
}
