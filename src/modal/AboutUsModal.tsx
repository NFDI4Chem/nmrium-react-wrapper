import { Dialog, DialogBody } from '@blueprintjs/core';
import styled from '@emotion/styled';
import { useOnOff } from 'react-science/ui';

import versionInfo from '../versionInfo.js';

const Title = styled.span`
  font-weight: bold;
  color: #ea580c;
  font-size: 1.5em;
`;
const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Link = styled.a`
  color: #969696;

  &:hover,
  &:focus {
    color: #00bcd4;
  }
`;

function AboutUsModal() {
  const [isOpenDialog, openDialog, closeDialog] = useOnOff(false);
  return (
    <>
      <InfoButton onClick={openDialog} />
      <Dialog
        isOpen={isOpenDialog}
        onClose={closeDialog}
        style={{ maxWidth: 1000 }}
        title="About NMRium react wrapper"
      >
        <DialogBody>
          <Container>
            <Title> NMRium react wrapper</Title>
            <Separator />
            Version <VersionInfo />
            <Separator />
            <Link
              href="https://github.com/NFDI4Chem/nmrium-react-wrapper"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ( https://github.com/NFDI4Chem/nmrium-react-wrapper )
            </Link>
          </Container>
        </DialogBody>
      </Dialog>
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
        left: '2px',
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
