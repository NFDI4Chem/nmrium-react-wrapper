/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NMRium, { NMRiumData } from 'nmrium';
import Button from 'nmrium/lib/component/elements/Button';
import { useEffect, useState } from 'react';
import events from './events';
import observableEvents from './observables';
import useActions from './hooks/useActions';

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

  const actionHandler = useActions();

  useEffect(() => {
    const unsubscribe = observableEvents.subscribe('load', (_data) => {
      // eslint-disable-next-line no-console
      console.log('test load data with subscribe');
      setDate(_data);
    });

    const clearListener = events.on('load', (_data) => {
      // eslint-disable-next-line no-console
      console.log('test load data with custom event');
      setDate(_data);
    });

    return () => {
      clearListener();
      unsubscribe();
    };
  });

  return (
    <div css={styles.container}>
      {/* <div css={styles.header}>
        <Button.Done
          style={{ margin: '0 10px' }}
          onClick={() => {
            events.trigger('load', testData);
          }}
        >
          Trigger load custom event
        </Button.Done>
        <Button.Done
          onClick={() => {
            observableEvents.trigger('load', testData);
          }}
        >
          Test Load observable
        </Button.Done>
      </div> */}

      <div css={styles.wrapper}>
        <NMRium
          data={data}
          onDataChange={actionHandler}
          preferences={{
            toolBarButtons: {
              import: true,
              exportAs: true,
            },
            panels: {
              multipleSpectraAnalysisPanel: { hidden: true },
            },
          }}
        />
      </div>
    </div>
  );
}
