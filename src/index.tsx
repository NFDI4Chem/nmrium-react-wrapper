import { createRoot } from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { registerSW } from 'virtual:pwa-register';
import NMRiumWrapper from './NMRiumWrapper';
import NMRiumWrapperDemo from './demo/NMRiumWrapperDemo';

const rootContainer = document.getElementById('root');

if (!rootContainer) {
  throw new Error('#root element is not exists in the dom');
}

// add this to prompt for a refresh
const updateSW = registerSW({
  onNeedRefresh() {
    if (window.confirm('New NMRium wrappe update available. Reload?')) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    window.alert('NMRium wrapper is ready to run in offline mode');
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
