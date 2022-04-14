/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NMRium, { NMRiumData } from 'nmrium';
import Button from 'nmrium/lib/component/elements/Button';
import { useEffect, useState } from 'react';
import events from './events';
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
  `,
  wrapper: css`
    flex: 1;
    overflow: hidden;
  `,
};

export default function NMRiumWrapper() {
  const [data, setDate] = useState<NMRiumData>();

  const actionHandler = useActions();

  useEffect(() => {
    events.on('load', (result) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const spectra: any[] = [];
      // eslint-disable-next-line no-restricted-syntax
      for (const jcampURL of result.urls) {
        spectra.push({
          source: {
            jcampURL,
          },
        });
      }
      setDate({
        spectra,
      });
    });
  });

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <Button.Done
          onClick={() => {
            events.trigger('load', {
              urls: [
                'https://cheminfo.github.io/nmr-dataset-demo/cytisine/13c.jdx',
              ],
            });
          }}
        >
          Test Load from external URL
        </Button.Done>
      </div>

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
