/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from 'nmrium/lib/component/elements/Button';
import events from './events';
import NMRiumWrapper from './NMRiumWrapper';
import observables from './observables';

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

export default function NMRiumWrapperDemo() {
  return (
    <div css={styles.container}>
      <div id="header" css={styles.header}>
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
            observables.trigger('load', testData);
          }}
        >
          Test Load observable
        </Button.Done>
        <Button.Done
          onClick={() => {
            observables.trigger('loadURLs', {
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

      <NMRiumWrapper />
    </div>
  );
}
