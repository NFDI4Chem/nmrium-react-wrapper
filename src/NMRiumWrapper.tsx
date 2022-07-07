/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NMRium, { NMRiumData } from 'nmrium';
import { useEffect, useState, useCallback } from 'react';
import events from './events';
import { usePreferences } from './hooks/usePreferences';
import { useLoadSpectra } from './hooks/useLoadSpectra';

const styles = {
  container: css`
    height: 100%;
    width: 100%;
  `,

  loadingContainer: css`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffffc9;
    font-size: 1.4em;
    user-select: none;
    -webkit-user-drag: none;
  `,
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
    const clearLoadFromURLsListener = events.on('loadURLs', (_data) => {
      // eslint-disable-next-line no-console
      console.log('load data from URLs');
      loadSpectra({ urls: _data.urls });
    });
    const clearLoadFromFilesListener = events.on('loadFiles', (_data) => {
      // eslint-disable-next-line no-console
      console.log('load data from files');
      loadSpectra({ files: _data.files });
    });

    const clearListener = events.on('load', (_data) => {
      // eslint-disable-next-line no-console
      console.log('test load data');
      setDate(_data);
    });

    return () => {
      clearListener();
      clearLoadFromURLsListener();
      clearLoadFromFilesListener();
    };
  });

  return (
    <div css={styles.container}>
      {isLoading && (
        <div css={styles.loadingContainer}>
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
