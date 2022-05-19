import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NMRiumWrapper from './NMRiumWrapper';
import NMRiumWrapperDemo from './NMRiumWrapperDemo';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('#root element is not exists in the dom');
}

const root = createRoot(rootContainer);

function RootWrapper() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NMRiumWrapper />} />
        <Route path="/demo" element={<NMRiumWrapperDemo />} />
      </Routes>
    </BrowserRouter>
  );
}

root.render(<RootWrapper />);
