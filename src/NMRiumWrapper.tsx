import type { NmriumData } from '@zakodium/nmrium-core';
import type { NMRiumChangeCb, NMRiumRefAPI } from 'nmrium';
import { NMRium } from 'nmrium';
import type { CSSProperties } from 'react';
import { useCallback, useEffect, useRef } from 'react';
import { RootLayout } from 'react-science/ui';

import events from './events/event.js';
import { useLoadSpectra } from './hooks/useLoadSpectra.js';
import { usePreferences } from './hooks/usePreferences.js';
import { useWhiteList } from './hooks/useWhiteList.js';
import AboutUsModal from './modal/AboutUsModal.js';

const styles: Record<'container' | 'loadingContainer', CSSProperties> = {
  container: {
    height: '100%',
    width: '100%',
    position: 'relative',
  },

  loadingContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffffc9',
    fontSize: '1.4em',
    userSelect: 'none',
    WebkitUserSelect: 'none',
  },
};

export default function NMRiumWrapper() {
  const { allowedOrigins, isFetchAllowedOriginsPending } = useWhiteList();
  const nmriumRef = useRef<NMRiumRefAPI>(null);
  const { workspace, preferences, defaultEmptyMessage, customWorkspaces } =
    usePreferences();
  const dataChangeHandler = useCallback<NMRiumChangeCb>((state, source) => {
    events.trigger('data-change', {
      state,
      source,
    });
  }, []);

  const { load: loadSpectra, data, setData } = useLoadSpectra();

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
              `ERROR! Property 'type' accept only 'exportViewerAsBlob'.`,
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
          case 'nmrium':
            setData(loadData.data as NmriumData);
            break;
          case 'file': {
            const { data: files, activeTab } = loadData;
            loadSpectra({ files, activeTab });
            break;
          }
          case 'url': {
            const { data: urls, activeTab } = loadData;
            loadSpectra({ urls, activeTab });
            break;
          }
          default: {
            throw new Error(
              `ERROR! Property 'type' accept only nmrium, url or file.`,
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

  return (
    <RootLayout style={styles.container}>
      {isFetchAllowedOriginsPending && (
        <div style={styles.loadingContainer}>
          <span>Loading .... </span>
        </div>
      )}
      <NMRium
        ref={nmriumRef}
        data={data as unknown as NmriumData}
        onChange={dataChangeHandler}
        preferences={preferences}
        workspace={workspace}
        emptyText={defaultEmptyMessage}
        onError={(error) => {
          events.trigger('error', error);
        }}
        customWorkspaces={customWorkspaces}
      />
      <AboutUsModal />
    </RootLayout>
  );
}
