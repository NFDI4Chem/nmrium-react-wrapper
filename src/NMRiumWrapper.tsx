/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NMRium, { NMRiumData } from 'nmrium';
import Button from 'nmrium/lib/component/elements/Button';
import { useEffect, useState } from 'react';
import events from './events';
import observableEvents from './observables';
import useActions from './hooks/useActions';
import { usePreferences } from './hooks/usePreferences';
import { useLoadSpectraFromURL } from './hooks/useLoadSpectraFromURL';

const styles = {
  container: css`
    display: flex;
    flex-direction: column;
    height: 100%;
  `,
  header: css`
    height: 40px;
    width: 100%;
    padding: 5px;
    display: flex;
  `,
  wrapper: css`
    flex: 1;
    overflow: hidden;
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

const testData = {
  spectra: [
    {
      source: {
        jcampURL:
          'https://cheminfo.github.io/nmr-dataset-demo/cytisine/13c.jdx',
      },
    },
  ],
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
    const unsubscribe = observableEvents.subscribe('load', (_data) => {
      // eslint-disable-next-line no-console
      console.log(' load data with subscribe');
      setDate(_data);
    });
    const unsubscribeLoadFromURLs = observableEvents.subscribe(
      'loadURLs',
      (_data) => {
        // eslint-disable-next-line no-console
        console.log(' load data from URLs with subscribe');
        loadFromURLs(_data.urls);
      },
    );

    const clearLoadFromURLsListener = events.on('loadURLs', (_data) => {
      // eslint-disable-next-line no-console
      console.log(' load data from URLs with subscribe');
      loadFromURLs(_data.urls);
    });

    const clearListener = events.on('load', (_data) => {
      // eslint-disable-next-line no-console
      console.log('test load data with custom event');
      setDate(_data);
    });

    return () => {
      clearListener();
      clearLoadFromURLsListener();
      unsubscribe();
      unsubscribeLoadFromURLs();
    };
  });

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <Button.Done
          style={{ marginRight: '10px' }}
          onClick={() => {
            events.trigger('load', testData);
          }}
        >
          Trigger load custom event
        </Button.Done>
        <Button.Done
          style={{ marginRight: '10px' }}
          onClick={() => {
            observableEvents.trigger('load', testData);
          }}
        >
          Test Load observable
        </Button.Done>
        <Button.Done
          onClick={() => {
            observableEvents.trigger('loadURLs', {
              urls: [
                'https://cheminfo.github.io/nmr-dataset-demo/cytisine/13c.jdx',
                'https://cheminfo.github.io/nmr-dataset-demo/cytisine/1h.jdx',
                'https://cheminfo.github.io/bruker-data-test/data/zipped/aspirin-1h.zip',
              ],
            });
          }}
        >
          Test Load from URLS
        </Button.Done>
      </div>

      <div css={styles.wrapper}>
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
    </div>
  );
}
