import NMRium, { NMRiumData } from 'nmrium';
import { useEffect, useState, useCallback, CSSProperties } from 'react';
import events from './events';
import { usePreferences } from './hooks/usePreferences';
import { useLoadSpectra } from './hooks/useLoadSpectra';

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
  const [data, setDate] = useState<NMRiumData>();
  const { workspace, preferences } = usePreferences();
  const dataChangeHandler = useCallback((nmriumData) => {
    events.trigger('dataChange', nmriumData);
  }, []);

  const { load: loadSpectra, isLoading, data: loadedData } = useLoadSpectra();

  useEffect(() => {
    if (!isLoading) {
      setDate(loadedData);
    }
  }, [isLoading, loadedData]);

  useEffect(() => {
    const clearLoadListener = events.on('load', (loadData) => {
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
    });

    return () => {
      clearLoadListener();
    };
  });

  return (
    <div style={styles.container}>
      {isLoading && (
        <div style={styles.loadingContainer}>
          <span>Loading .... </span>
        </div>
      )}
      <NMRium
        data={data}
        onDataChange={dataChangeHandler}
        preferences={preferences}
        workspace={workspace}
      />
    </div>
  );
}
