import 'react-science/styles/preflight.css';

import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';

import NMRiumWrapper from './NMRiumWrapper';
import NMRiumWrapperDemo from './demo/NMRiumWrapperDemo';

const rootContainer = document.querySelector('#root');

if (!rootContainer) {
  throw new Error('#root element is not exists in the dom');
}

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    // eslint-disable-next-line no-alert
    if (window.confirm('New NMRium wrappe update available. Reload?')) {
      void updateSW(true);
    }
  },
});

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
