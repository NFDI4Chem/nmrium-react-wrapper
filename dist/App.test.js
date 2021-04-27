import { render, screen } from '@testing-library/react';
import NMRDisplayer from './lib/index';

test('renders learn react link', () => {
  // render(<div></div>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});