/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import NMRium, { NMRiumData } from 'nmrium';
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
  `,
  wrapper: css`
    flex: 1;
    overflow: hidden;
  `,
};

interface NMRWrapperProps {
  data?: NMRiumData;
}

export default function NMRiumWrapper(props: NMRWrapperProps) {
  const {
    data = {
      spectra: [
        {
          source: {
            jcampURL:
              'https://cheminfo.github.io/nmr-dataset-demo/cytisine/13c.jdx',
          },
        },
      ],
    },
  } = props;

  const actionHandler = useActions();

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <span>header</span>
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
