import type { NMRiumChangeCb, NMRiumRefAPI, NMRiumState } from 'nmrium';
import { NMRium } from 'nmrium';
import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RootLayout } from 'react-science/ui';

import { LoadingIndicator } from './Loadingindicator.js';
import { loadSpectraFromSource } from './data-source/loadSpectraFromSource.js';
import events from './events/event.js';
import type { HighlightParams } from './events/types.js';
import {
  resolveHighlightPeak,
  resolveHighlightSignal,
} from './highlight/resolveHighlight.js';
import { useLoadSpectra } from './hooks/useLoadSpectra.js';
import { usePreferences } from './hooks/usePreferences.js';
import { useWhiteList } from './hooks/useWhiteList.js';
import AboutUsModal from './modal/AboutUsModal.js';

const containerStyle: CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'relative',
};

const ACCEPTED_ACTION_TYPES =
  "'exportSpectraViewerAsBlob', 'selectTab', 'highlightPeak', 'highlightSignal', or 'clearHighlight'";

function reportActionError(message: string) {
  const error = new Error(message);
  events.trigger('error', error);
  // eslint-disable-next-line no-console
  console.error(error);
}

const NO_HIGHLIGHTS: readonly string[] = [];

export default function NMRiumWrapper() {
  const { allowedOrigins, isFetchAllowedOriginsPending } = useWhiteList();
  const nmriumRef = useRef<NMRiumRefAPI>(null);
  const latestStateRef = useRef<NMRiumState | null>(null);
  const [highlightedIds, setHighlightedIds] = useState(NO_HIGHLIGHTS);
  const {
    workspace,
    preferences,
    defaultEmptyMessage,
    customWorkspaces,
    spectraSource,
  } = usePreferences();

  const { load: loadSpectra, data, isLoading, setActiveTab } = useLoadSpectra();

  const dataChangeHandler = useCallback<NMRiumChangeCb>((state, source) => {
    // avoid triggering data-change event for SET_2D_LEVEL action, This should be handled internally in NMRium
    if (source === 'view' && state.data.actionType === 'SET_2D_LEVEL') {
      return;
    }
    latestStateRef.current = state;
    events.trigger('data-change', { state, source });
  }, []);

  const applyHostHighlight = useCallback(
    (params: HighlightParams, resolveTarget: typeof resolveHighlightPeak) => {
      const resolved = resolveTarget(latestStateRef.current, params);
      if (!resolved.ok) {
        reportActionError(resolved.message);
        return;
      }

      const nucleus = params.nucleus?.trim();
      if (nucleus) {
        setActiveTab({ tab: nucleus.toUpperCase() });
      }

      setHighlightedIds(resolved.ids);
    },
    [setActiveTab],
  );

  useEffect(() => {
    if (!spectraSource) return;

    const { source, id } = spectraSource;

    async function loadFromSource() {
      try {
        const nmrium = await loadSpectraFromSource(source, id);
        void loadSpectra({ nmrium });
      } catch (error) {
        events.trigger('error', error as Error);
        // eslint-disable-next-line no-console
        console.error(error);
      }
    }

    void loadFromSource();
  }, [spectraSource, loadSpectra]);

  useEffect(() => {
    const clearActionListener = events.on(
      'action-request',
      (request) => {
        switch (request.type) {
          case 'exportSpectraViewerAsBlob': {
            const blob = nmriumRef.current?.getSpectraViewerAsBlob();
            if (blob) {
              events.trigger('action-response', {
                type: request.type,
                data: blob,
              });
            }
            break;
          }
          case 'selectTab': {
            const { tab } = request.params;
            setActiveTab({ tab: tab.toUpperCase() });
            break;
          }
          case 'highlightPeak': {
            applyHostHighlight(request.params, resolveHighlightPeak);
            break;
          }
          case 'highlightSignal': {
            applyHostHighlight(request.params, resolveHighlightSignal);
            break;
          }
          case 'clearHighlight': {
            setHighlightedIds(NO_HIGHLIGHTS);
            break;
          }
          default: {
            reportActionError(
              `ERROR! Property 'type' accepts only ${ACCEPTED_ACTION_TYPES}.`,
            );
          }
        }
      },
      { allowedOrigins },
    );

    const clearLoadListener = events.on(
      'load',
      (loadData) => {
        switch (loadData.type) {
          case 'nmrium': {
            const { data, activeTab = '' } = loadData;
            void loadSpectra({ nmrium: data, activeTab });
            break;
          }
          case 'file': {
            const { data: files, activeTab = '', fileFilter } = loadData;
            void loadSpectra({ files, activeTab, fileFilter });
            break;
          }
          case 'url': {
            const { data: urls, activeTab = '', fileFilter } = loadData;
            void loadSpectra({ urls, activeTab, fileFilter });
            break;
          }
          default: {
            throw new Error(
              `ERROR! Property 'type' accepts only 'nmrium', 'url', or 'file'.`,
            );
          }
        }
      },
      { allowedOrigins },
    );

    return () => {
      clearLoadListener();
      clearActionListener();
    };
  });

  const isShowingOverlay = isFetchAllowedOriginsPending || isLoading;

  return (
    <RootLayout style={containerStyle}>
      <LoadingIndicator visible={isShowingOverlay} />
      <NMRium
        ref={nmriumRef}
        state={data?.state}
        aggregator={data?.aggregator}
        onChange={dataChangeHandler}
        highlightedIds={highlightedIds}
        preferences={preferences}
        workspace={workspace}
        emptyText={defaultEmptyMessage}
        onError={(error) => {
          events.trigger('error', error as Error);
        }}
        customWorkspaces={customWorkspaces}
      />
      <AboutUsModal />
    </RootLayout>
  );
}
