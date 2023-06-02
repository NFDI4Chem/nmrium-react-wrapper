/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Button from 'nmrium/lib/component/elements/Button';
import { NMRiumData } from 'nmrium';
import events from '../events';
import NMRiumWrapper from '../NMRiumWrapper';
import jsonData from './data/test.json';
import { loadFilesFromURLs } from '../utilities/loadFilesFromURLs';

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
            events.trigger('load', {
              data: jsonData as NMRiumData,
              type: 'nmrium',
            });
          }}
        >
          Test load from json
        </Button.Done>

        <Button.Done
          style={{ marginRight: '10px' }}
          onClick={() => {
            events.trigger('load', {
              data: [
                'https://cheminfo.github.io/nmr-dataset-demo/cytisine/13c.jdx',
                'https://cheminfo.github.io/nmr-dataset-demo/cytisine/1h.jdx',
                'https://cheminfo.github.io/bruker-data-test/data/zipped/aspirin-1h.zip',
                './data/13c.zip',
              ],
              type: 'url',
            });
          }}
        >
          Test Load from URLS
        </Button.Done>
        <Button.Done
          onClick={async () => {
            const files = await loadFilesFromURLs(['./data/13c.zip']);
            events.trigger('load', {
              data: files,
              type: 'file',
            });
          }}
        >
          Test Load Files
        </Button.Done>
      </div>

      <NMRiumWrapper />
    </div>
  );
}
