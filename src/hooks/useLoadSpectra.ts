import { fileCollectionFromFiles } from 'filelist-utils';
import {
  read,
  readFromWebSource,
  NmriumState,
  CURRENT_EXPORT_VERSION,
} from 'nmr-load-save';
import { useCallback, useMemo, useState } from 'react';

import events from '../events';
import { appendFilters } from '../utilities/appendFilters';
import { getFileNameFromURL } from '../utilities/getFileNameFromURL';
import { isArrayOfString } from '../utilities/isArrayOfString';

async function loadSpectraFromFiles(files: File[]) {
  const fileCollection = await fileCollectionFromFiles(files);

  const {
    nmriumState: { data },
  } = await read(fileCollection);
  return data;
}

async function loadSpectraFromURLs(urls: string[]) {
  const entries = urls.map((url) => {
    const refURL = new URL(url);
    const name = getFileNameFromURL(url);
    let path = refURL.pathname;
    const hasExtension = name && name.includes('.');
    if (!hasExtension) {
      path = `${path}.zip`;
    }
    return { relativePath: path, baseURL: refURL.origin };
  }, []);

  const { data } = await readFromWebSource({ entries });
  return data;
}

type NMRiumData = NmriumState['data'];

export function useLoadSpectra() {
  const [data, setData] = useState<NMRiumData>({ spectra: [], molecules: [] });
  const [isLoading, setLoading] = useState<boolean>(false);

  const load = useCallback(
    async (options: { urls: string[] } | { files: File[] }) => {
      setLoading(true);
      try {
        if ('urls' in options) {
          if (isArrayOfString(options.urls)) {
            const result = await loadSpectraFromURLs(options.urls);
            if (result?.spectra) {
              appendFilters(result?.spectra);
            }
            setData(result as NMRiumData);
          } else {
            throw new Error('The input must be a valid urls array of string[]');
          }
        } else if ('files' in options) {
          const result = await loadSpectraFromFiles(options.files);
          if (result?.spectra) {
            appendFilters(result?.spectra);
          }
          setData(result as NMRiumData);
        }
      } catch (error: unknown) {
        const loadError = error as Error;
        events.trigger('error', loadError);
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
      data: { version: CURRENT_EXPORT_VERSION, data },
      load,
      isLoading,
    }),
    [data, isLoading, load],
  );
}
