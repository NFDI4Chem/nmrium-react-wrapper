/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NMRium, { NMRiumData } from 'nmrium';
import { useEffect, useState } from 'react';
import events from './events';
import useActions from './hooks/useActions';
import { usePreferences } from './hooks/usePreferences';
import { useLoadSpectraFromURL } from './hooks/useLoadSpectraFromURL';

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

export default function NMRiumWrapper() {
  const [data, setDate] = useState<NMRiumData>();
  const { workspace, preferences } = usePreferences();
  const actionHandler = useActions();
  const {
    load: loadFromURLs,
    isLoading,
    data: loadedData,
  } = useLoadSpectraFromURL();

  useEffect(() => {
    if (!isLoading && loadedData.length > 0) {
      setDate({ spectra: loadedData });
    }
  }, [isLoading, loadedData]);

  useEffect(() => {
    const clearLoadFromURLsListener = events.on('loadURLs', (_data) => {
      // eslint-disable-next-line no-console
      console.log('load data from URLs');
      loadFromURLs(_data.urls);
    });

    const clearListener = events.on('load', (_data) => {
      // eslint-disable-next-line no-console
      console.log('test load data');
      setDate(_data);
    });

    return () => {
      clearListener();
      clearLoadFromURLsListener();
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
        onDataChange={actionHandler}
        preferences={preferences}
        workspace={workspace}
      />
    </div>
  );
}
