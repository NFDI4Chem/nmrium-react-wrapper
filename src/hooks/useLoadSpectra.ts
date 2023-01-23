import { useCallback, useMemo, useState } from 'react';
import { read, readSource, Source } from 'nmr-load-save';
import { Spectrum } from 'nmr-load-save/lib/types/Spectra/Spectrum';
import { fileCollectionFromFiles } from 'filelist-utils';
import events from '../events';
import { isArrayOfString } from '../utilities/isArrayOfString';
import { getFileNameFromURL } from '../utilities/getFileNameFromURL';

async function loadSpectraFromFiles(files: File[]) {
  // TODO use the new function from filelist-utils once they solve the problem of create filesCollection from files with empty webkitrelativepath
  const fileCollection = await fileCollectionFromFiles(files);
  const result = await read(fileCollection);
  // eslint-disable-next-line no-restricted-syntax
  for (const spectrum of result.data.spectra) {
    spectrum.source = {} as Source;
  }
  return result;
}

async function loadSpectraFromURLs(urls: string[]) {
  const promises = urls.map((url) => {
    const refURL = new URL(url);
    let name = getFileNameFromURL(url);
    const hasExtension = name && name.indexOf('.') !== -1;
    if (!hasExtension) {
      name = `${name}.zip`;
    }
    return readSource({
      baseURL: refURL.origin,
      files: [{ relativePath: refURL.pathname, name }],
    });
  }, []);
  const results = await Promise.all(promises);
  const spectra: any[] = [];
  const molecules: any[] = [];
  // eslint-disable-next-line no-restricted-syntax
  for (const result of results) {
    spectra.push(...result.data.spectra);
    molecules.push(...result.data.spectra);
  }
  return { spectra, molecules };
}

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
        if ('urls' in options) {
          if (isArrayOfString(options.urls)) {
            const { spectra, molecules } = await loadSpectraFromURLs(
              options.urls,
            );
            setData({ spectra, molecules });
          } else {
            throw new Error('The input must be a valid urls array of string[]');
          }
        } else if ('files' in options) {
          // TODO use the new function from filelist-utils once they solve the problem of create filesCollection from files with empty webkitrelativepath
          const {
            data: { spectra, molecules },
          } = await loadSpectraFromFiles(options.files);
          setData({ spectra, molecules });
        }
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
