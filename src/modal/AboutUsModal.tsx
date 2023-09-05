/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Modal, useOnOff } from 'react-science/ui';

import versionInfo from '../versionInfo';

const styles = css`
  width: 30vw;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  user-select: none;

  button:focus {
    outline: none;
  }

  .container {
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  span.title {
    font-weight: bold;
    color: #ea580c;
    font-size: 2em;
  }

  a {
    color: #969696;
  }

  a:hover,
  a:focus {
    color: #00bcd4;
  }

  .header {
    span {
      color: #464646;
      font-size: 15px;
      flex: 1;
      user-select: none;
    }
  }
`;

function AboutUsModal() {
  const [isOpenDialog, openDialog, closeDialog] = useOnOff(false);
  return (
    <>
      <InfoButton onClick={openDialog} />
      <Modal
        hasCloseButton
        isOpen={isOpenDialog}
        onRequestClose={closeDialog}
        maxWidth={1000}
      >
        <div css={styles}>
          <Modal.Header>
            <div className="header">
              <span>About NMRium react wrapper</span>
            </div>
          </Modal.Header>
          <div className="container">
            <span className="title"> NMRium react wrapper</span>
            <Separator />
            Version <VersionInfo />
            <Separator />
            <a href="https://git.nmrium.org" target="_blank" rel="noreferrer">
              GitHub ( https://git.nmrium.org )
            </a>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AboutUsModal;

function VersionInfo() {
  const { version } = versionInfo;
  if (version === 'HEAD') {
    return <>HEAD</>;
  } else if (version.startsWith('git-')) {
    return (
      <a
        href={`https://github.com/NFDI4Chem/nmrium-react-wrapper/tree/${version.slice(
          4,
        )}`}
        target="_blank"
        rel="noreferrer"
      >
        git-{version.slice(4, 14)}
      </a>
    );
  } else {
    return (
      <a
        href={`https://github.com/NFDI4Chem/nmrium-react-wrapper/tree/${version}`}
        target="_blank"
        rel="noreferrer"
      >
        {version}
      </a>
    );
  }
}

function InfoButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      type="button"
      style={{
        fontSize: '13px',
        textAlign: 'center',
        width: '25px',
        height: '25px',
        borderRadius: '25px',
        border: '0.55px solid #ea580c',
        left: '5px',
        bottom: '10px',
        position: 'absolute',
      }}
    >
      &#9432;
    </button>
  );
}

function Separator() {
  return (
    <span
      style={{
        borderBottom: '1px solid gray',
        width: '15px',
        height: '1px',
        margin: '10px 0',
      }}
    />
  );
}
