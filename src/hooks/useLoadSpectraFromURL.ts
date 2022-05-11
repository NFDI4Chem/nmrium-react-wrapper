/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
import {
  FILES_TYPES,
  getFileExtension,
} from 'nmrium/lib/component/utility/FileUtility';
import { addBruker, addJcamp, addJDF } from 'nmrium/lib/data/SpectraManager';
import Zip from 'jszip';
import { useCallback, useMemo, useState } from 'react';
import events from '../events';
import observableEvents from '../observables';

export function loadFromURLs(
  urls: string[],
): Promise<Array<{ value: ArrayBuffer; extension: string }>> {
  const fetches = urls.map((url) =>
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((value) => {
        return { value, extension: getFileExtension(url) };
      }),
  );

  return Promise.all(fetches);
}

export function useLoadSpectraFromURL() {
  const [data, setData] = useState<any>({});
  const [isLoading, setLoading] = useState<boolean>(false);

  const load = useCallback(async (urls: string[]) => {
    setLoading(true);
    const loadedFiles = await loadFromURLs(urls);
    const uniqueFileExtensions = {};

    for (const { value, extension } of loadedFiles) {
      if (uniqueFileExtensions[extension]) {
        uniqueFileExtensions[extension].push(value);
      } else {
        uniqueFileExtensions[extension] = [value];
      }
    }

    for (const extension of Object.keys(uniqueFileExtensions)) {
      const spectra: any[] = [];
      const usedColors = { '1d': [], '2d': [] };

      const files = uniqueFileExtensions[extension];

      try {
        switch (extension) {
          case FILES_TYPES.JDX:
          case FILES_TYPES.DX: {
            for (const jcamp of files) {
              addJcamp(spectra, jcamp, {}, usedColors);
            }

            break;
          }
          case FILES_TYPES.JDF: {
            for (const jdf of files) {
              addJDF(spectra, jdf, {}, usedColors);
            }

            break;
          }
          case FILES_TYPES.ZIP: {
            for (const zipFile of files) {
              const unzipResult = await Zip.loadAsync(zipFile);

              const hasBruker = Object.keys(unzipResult.files).some((path) => {
                return ['2rr', 'fid', '1r'].some((brukerFile) =>
                  path.endsWith(brukerFile),
                );
              });

              if (hasBruker) {
                const brukerSpectra = await addBruker({}, zipFile, usedColors);
                spectra.concat(brukerSpectra);
              } else {
                throw new Error('The file is not a valid bruker file');
              }
            }

            break;
          }

          default:
            throw new Error('The file extension must be zip, dx, jdx, jdf');
        }
      } catch (error: any) {
        events.trigger('error', error);
        observableEvents.trigger('error', error);
        // eslint-disable-next-line no-console
        console.log(error.message);
      }

      setData(spectra);
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
