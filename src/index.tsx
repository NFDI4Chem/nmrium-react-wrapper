import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NMRiumWrapper from './NMRiumWrapper';
import NMRiumWrapperDemo from './NMRiumWrapperDemo';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('#root element is not exists in the dom');
}

const root = createRoot(rootContainer);

function RootWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NMRiumWrapper />} />
        <Route path="/demo" element={<NMRiumWrapperDemo />} />
      </Routes>
    </Router>
  );
}

root.render(<RootWrapper />);
