/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from 'nmrium/lib/component/elements/Button';
import { NMRiumData } from 'nmrium';
import events from '../events';
import NMRiumWrapper from '../NMRiumWrapper';
import jsonData from './data/test.json';

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

export default function NMRiumWrapperDemo() {
  return (
    <div css={styles.container}>
      <div id="header" css={styles.header}>
        <Button.Done
          style={{ marginRight: '10px' }}
          onClick={() => {
            events.trigger('load', jsonData as NMRiumData);
          }}
        >
          Test load from json
        </Button.Done>

        <Button.Done
          onClick={() => {
            events.trigger('loadURLs', {
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
