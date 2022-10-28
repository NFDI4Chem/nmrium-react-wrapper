import { useCallback, useMemo, useState } from 'react';
import { read } from 'nmr-load-save';
import { Spectrum } from 'nmr-load-save/lib/types/Spectra/Spectrum';
import events from '../events';
import { isArrayOfString } from '../utilities/isArrayOfString';
import { loadFilesFromURLs } from '../utilities/loadFilesFromURLs';
import { createFileCollectionFromFiles } from '../utilities/createFileCollection';

export function useLoadSpectra() {
  const [data, setData] = useState<{
    spectra: Spectrum[];
    molecules: Record<string, string>[];
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
          inputFiles = options.files;
        }
        // TODO use the new function from filelist-utils once they solve the problem of create filesCollection from files with empty webkitrelativepath
        const fileCollection = await createFileCollectionFromFiles(inputFiles);
        const { spectra, molecules } = await read(fileCollection);
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
