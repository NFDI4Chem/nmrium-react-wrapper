import { Spinner } from '@blueprintjs/core';
import styled from '@emotion/styled';

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  gap: 12px;
  user-select: none;
  -webkit-user-select: none;
`;

const Label = styled.span`
  font-size: 0.8125rem;
  font-weight: 500;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #6b7280;
`;

interface LoadingIndicatorProps {
  label?: string;
  visible: boolean;
}

export function LoadingIndicator({
  label = 'Loading',
  visible,
}: LoadingIndicatorProps) {
  if (!visible) return null;

  return (
    <Overlay>
      <Spinner size={36} />
      <Label>{label}</Label>
    </Overlay>
  );
}
