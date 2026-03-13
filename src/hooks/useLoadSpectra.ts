import type {
  CoreReadReturn,
  NmriumState,
  ParsingOptions,
  ViewState,
} from '@zakodium/nmrium-core';
import { CURRENT_EXPORT_VERSION } from '@zakodium/nmrium-core';
import init from '@zakodium/nmrium-core-plugins';
import { FifoLogger } from 'fifo-logger';
import { FileCollection } from 'file-collection';
import { useCallback, useMemo, useState } from 'react';

import events from '../events/event.js';
import { getFileNameFromURL } from '../utilities/getFileNameFromURL.js';
import { isArrayOfString } from '../utilities/isArrayOfString.js';

type LoadOptions =
  | { nmrium: object; activeTab?: string }
  | { urls: string[]; activeTab?: string }
  | { files: File[]; activeTab?: string };

// CoreReadReturn with `state.view` made optional to allow partial injection.
export type NMRiumData = Omit<CoreReadReturn, 'state'> & {
  state: Omit<CoreReadReturn['state'], 'view'> & { view?: ViewState };
};

interface UseLoadSpectraResult {
  data: NMRiumData | null;
  load: (options: LoadOptions) => Promise<void>;
  isLoading: boolean;
}

const core = init();
const logger = new FifoLogger();

logger.addEventListener('change', ({ detail: { logs } }) => {
  const log = logs.at(-1);
  if (!log || !['error', 'fatal', 'warn'].includes(log.levelLabel)) return;

  const error = log.error ?? new Error(log.message);
  events.trigger('error', error);
  // eslint-disable-next-line no-console
  console.log(error);
});

const PARSING_OPTIONS: Partial<ParsingOptions> = {
  onLoadProcessing: { autoProcessing: true },
  experimentalFeatures: true,
  selector: { general: { dataSelection: 'preferFT' } },
  logger,
};

async function loadSpectraFromNMRium(nmrium: object): Promise<CoreReadReturn> {
  return core.readNMRiumObject(nmrium, PARSING_OPTIONS);
}

async function loadSpectraFromFiles(files: File[]): Promise<CoreReadReturn> {
  const fileCollection = await new FileCollection().appendFileList(files);
  return core.read(fileCollection, PARSING_OPTIONS);
}

async function loadSpectraFromURLs(urls: string[]): Promise<CoreReadReturn> {
  const entries = urls.map((url) => {
    const refURL = new URL(url);
    const name = getFileNameFromURL(url);
    let path = refURL.pathname;

    if (!name?.includes('.')) {
      path = `${path}.zip`;
    }

    return { relativePath: path, baseURL: refURL.origin };
  });

  return core.readFromWebSource({ entries }, PARSING_OPTIONS);
}

export function useLoadSpectra(): UseLoadSpectraResult {
  const [result, setResult] = useState<CoreReadReturn | null>(null);
  const [activeTab, setActiveTab] = useState<string | undefined>();
  const [isLoading, setLoading] = useState(false);

  const load = useCallback(async (options: LoadOptions) => {
    setLoading(true);
    try {
      let loadedResult: CoreReadReturn;
      let resolvedActiveTab: string | undefined;

      if ('nmrium' in options) {
        loadedResult = await loadSpectraFromNMRium(options.nmrium);
        resolvedActiveTab =
          options.activeTab ?? loadedResult.state.view?.spectra?.activeTab;
      } else if ('urls' in options) {
        if (!isArrayOfString(options.urls)) {
          throw new Error('The input must be a valid urls array of string[]');
        }
        loadedResult = await loadSpectraFromURLs(options.urls);
        resolvedActiveTab = options.activeTab;
      } else {
        loadedResult = await loadSpectraFromFiles(options.files);
        resolvedActiveTab = options.activeTab;
      }

      setResult(loadedResult);
      setActiveTab(resolvedActiveTab);
      const state = {
        ...loadedResult.state,
        data: {
          spectra: [],
          molecules: [],
          ...loadedResult.state.data,
          actionType: 'INITIATE',
        },
      };

      events.trigger('data-change', {
        source: 'data',
        state: state as NmriumState,
      });
    } catch (error: unknown) {
      events.trigger('error', error as Error);
      // eslint-disable-next-line no-console
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, []);

  return useMemo(() => {
    const view = { spectra: { activeTab } } as unknown as ViewState;

    const data: NMRiumData | null = result
      ? {
          ...result,
          state: {
            version: result.state.version ?? CURRENT_EXPORT_VERSION,
            ...result.state,
            view,
          },
        }
      : null;

    return { data, load, isLoading };
  }, [activeTab, result, isLoading, load]);
}
