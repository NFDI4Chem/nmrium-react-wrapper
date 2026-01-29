import type { ParsingOptions, ViewState } from '@zakodium/nmrium-core';
import { CURRENT_EXPORT_VERSION } from '@zakodium/nmrium-core';
import init from '@zakodium/nmrium-core-plugins';
import { FifoLogger } from 'fifo-logger';
import { FileCollection } from 'file-collection';
import type { NMRiumState } from 'nmrium';
import { useCallback, useMemo, useState } from 'react';

import events from '../events/event.js';
import { getFileNameFromURL } from '../utilities/getFileNameFromURL.js';
import { isArrayOfString } from '../utilities/isArrayOfString.js';

type DeepPartial<T> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K];
};

const core = init();

const logger = new FifoLogger();

function handleLogger({ detail: { logs } }) {
  const log = logs.at(-1);
  if (log && ['error', 'fatal', 'warn'].includes(log.levelLabel)) {
    const error = log?.error || new Error(log?.message);
    events.trigger('error', error);
    // eslint-disable-next-line no-console
    console.log(error);
  }
}

logger.addEventListener('change', handleLogger);

const PARSING_OPTIONS: Partial<ParsingOptions> = {
  onLoadProcessing: { autoProcessing: true },
  experimentalFeatures: true,
  selector: { general: { dataSelection: 'preferFT' } },
  logger,
};

async function loadSpectraFromFiles(files: File[]) {
  const fileCollection = await new FileCollection().appendFileList(files);
  const {
    nmriumState: { data, version },
  } = await core.read(fileCollection, PARSING_OPTIONS);
  return { data, version } as NMRiumData;
}

async function loadSpectraFromURLs(urls: string[]) {
  const entries = urls.map((url) => {
    const refURL = new URL(url);
    const name = getFileNameFromURL(url);
    let path = refURL.pathname;
    const hasExtension = name?.includes('.');
    if (!hasExtension) {
      path = `${path}.zip`;
    }
    return { relativePath: path, baseURL: refURL.origin };
  }, []);

  const [{ data, version }] = await core.readFromWebSource(
    { entries },
    PARSING_OPTIONS,
  );
  return { data, version } as NMRiumData;
}

type LoadOptions =
  | { urls: string[]; activeTab?: string }
  | { files: File[]; activeTab?: string };

export type NMRiumData = Pick<NMRiumState, 'data' | 'version'>;

interface UseLoadSpectraResult {
  data: NMRiumData;
  load: (options: LoadOptions) => void;
  setData: (data: NMRiumData) => void;
  isLoading: boolean;
}

export function useLoadSpectra(): UseLoadSpectraResult {
  const [data, setData] = useState<NMRiumData>({
    data: { spectra: [], molecules: [] },
    version: CURRENT_EXPORT_VERSION,
  });
  const [activeTab, setActiveTab] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const load = useCallback(async (options: LoadOptions) => {
    setLoading(true);
    try {
      if ('urls' in options) {
        if (isArrayOfString(options.urls)) {
          const result = await loadSpectraFromURLs(options.urls);
          setData(result);
          setActiveTab(options?.activeTab);
        } else {
          throw new Error('The input must be a valid urls array of string[]');
        }
      } else if ('files' in options) {
        const result = await loadSpectraFromFiles(options.files);
        setData(result);
        setActiveTab(options?.activeTab);
      }
    } catch (error: unknown) {
      const loadError = error as Error;
      events.trigger('error', loadError);
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return useMemo(() => {
    let view: DeepPartial<ViewState> = {};
    view = { spectra: { activeTab } };
    const { version, ...other } = data;
    return {
      data: { version: version ?? CURRENT_EXPORT_VERSION, ...other, view },
      load,
      isLoading,
      setData,
    };
  }, [activeTab, data, isLoading, load]);
}
