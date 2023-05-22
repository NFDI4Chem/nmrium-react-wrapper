import NMRium, { NMRiumData, NMRiumRef, OnNMRiumChange } from 'nmrium';
import { useEffect, useState, useCallback, CSSProperties, useRef } from 'react';
import events from './events';
import { usePreferences } from './hooks/usePreferences';
import { useLoadSpectra } from './hooks/useLoadSpectra';
import { useWhiteList } from './hooks/useWhiteList';

const styles: Record<'container' | 'loadingContainer', CSSProperties> = {
  container: {
    height: '100%',
    width: '100%',
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

export type { NMRiumData };

export default function NMRiumWrapper() {
  const { allowedOrigins, isFetchAllowedOriginsPending } = useWhiteList();
  const nmriumRef = useRef<NMRiumRef>(null);
  const [data, setDate] = useState<NMRiumData>();
  const { workspace, preferences } = usePreferences();
  const dataChangeHandler = useCallback<OnNMRiumChange>((state, source) => {
    events.trigger('data-change', { state, source });
  }, []);

  const { load: loadSpectra, isLoading, data: loadedData } = useLoadSpectra();

  useEffect(() => {
    if (!isLoading) {
      setDate(loadedData as unknown as NMRiumData);
    }
  }, [isLoading, loadedData]);

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
            setDate(loadData.data);
            break;
          case 'file':
            loadSpectra({ files: loadData.data });
            break;
          case 'url':
            loadSpectra({ urls: loadData.data });
            break;

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
    <div style={styles.container}>
      {isLoading ||
        (isFetchAllowedOriginsPending && (
          <div style={styles.loadingContainer}>
            <span>Loading .... </span>
          </div>
        ))}
      <NMRium
        ref={nmriumRef}
        data={data}
        onChange={dataChangeHandler}
        preferences={preferences}
        workspace={workspace}
      />
    </div>
  );
}
