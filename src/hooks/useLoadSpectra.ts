import { useCallback, useMemo, useState } from 'react';
import {
  read,
  readFromWebSource,
  NmriumState,
  CURRENT_EXPORT_VERSION,
} from 'nmr-load-save';
import { fileCollectionFromFiles } from 'filelist-utils';
import events from '../events';
import { isArrayOfString } from '../utilities/isArrayOfString';
import { getFileNameFromURL } from '../utilities/getFileNameFromURL';

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
    const hasExtension = name && name.indexOf('.') !== -1;
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
            setData(result as NMRiumData);
          } else {
            throw new Error('The input must be a valid urls array of string[]');
          }
        } else if ('files' in options) {
          const result = await loadSpectraFromFiles(options.files);
          setData(result as NMRiumData);
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
      data: { version: CURRENT_EXPORT_VERSION, data },
      load,
      isLoading,
    }),
    [data, isLoading, load],
  );
}
