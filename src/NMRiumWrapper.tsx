import type { NMRiumChangeCb, NMRiumRefAPI } from 'nmrium';
import { NMRium } from 'nmrium';
import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { RootLayout } from 'react-science/ui';

import { LoadingIndicator } from './Loadingindicator.js';
import events from './events/event.js';
import { useLoadSpectra } from './hooks/useLoadSpectra.js';
import { usePreferences } from './hooks/usePreferences.js';
import { useWhiteList } from './hooks/useWhiteList.js';
import AboutUsModal from './modal/AboutUsModal.js';

const containerStyle: CSSProperties = {
  height: '100%',
  width: '100%',
  position: 'relative',
};

export default function NMRiumWrapper() {
  const { allowedOrigins, isFetchAllowedOriginsPending } = useWhiteList();
  const nmriumRef = useRef<NMRiumRefAPI>(null);
  const { workspace, preferences, defaultEmptyMessage, customWorkspaces } =
    usePreferences();

  const { load: loadSpectra, data, isLoading } = useLoadSpectra();

  const dataChangeHandler = useCallback<NMRiumChangeCb>((state, source) => {
    // avoid triggering data-change event for SET_2D_LEVEL action, This should be handled internally in NMRium
    if (source === 'view' && state.data.actionType === 'SET_2D_LEVEL') {
      return;
    }
    events.trigger('data-change', { state, source });
  }, []);

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
          default: {
            throw new Error(
              `ERROR! Property 'type' accepts only 'exportViewerAsBlob'.`,
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
            const { data: files, activeTab = '' } = loadData;
            void loadSpectra({ files, activeTab });
            break;
          }
          case 'url': {
            const { data: urls, activeTab = '' } = loadData;
            void loadSpectra({ urls, activeTab });
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
