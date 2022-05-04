import { createRoot } from 'react-dom/client';
import NMRWrapper from './NMRiumWrapper';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('#root element is not exists in the dom');
}

const root = createRoot(rootContainer);

root.render(<NMRWrapper />);
