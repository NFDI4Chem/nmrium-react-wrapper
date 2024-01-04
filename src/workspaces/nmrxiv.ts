import { InnerWorkspace } from 'nmr-load-save';

export function getNmrXivWorkspace(hidePanelOnLoad = false): InnerWorkspace {
  return {
    version: 1,
    label: 'nmrXiv',
    general: {
      dimmedSpectraOpacity: 0.1,
      verticalSplitterPosition: '160px',
      verticalSplitterCloseThreshold: 600,
      spectraRendering: 'auto',
      loggingLevel: 'info',
      invert: false,
    },
    display: {
      general: {
        experimentalFeatures: { display: true },
        hidePanelOnLoad,
        hideHelp: true,
        hideLogs: true,
        hideMaximize: true,
        hideWorkspaces: true,
        hideGeneralSettings: true,
      },

      panels: {
        spectraPanel: { display: true, open: true },
        informationPanel: { display: true, open: false },
        peaksPanel: { display: true, open: false },
        integralsPanel: { display: true, open: false },
        rangesPanel: { display: true, open: false },
        structuresPanel: { display: true, open: false },
        processingsPanel: { display: true, open: false },
        zonesPanel: { display: true, open: false },
        summaryPanel: { display: true, open: false },
      },
      toolBarButtons: {
        peakPicking: true,
        baselineCorrection: true,
        exclusionZones: true,
        exportAs: true,
        fft: true,
        import: true,
        integral: true,
        multipleSpectraAnalysis: true,
        phaseCorrection: true,
        rangePicking: true,
        realImaginary: true,
        slicing: true,
        spectraCenterAlignments: true,
        spectraStackAlignments: true,
        apodization: true,
        zeroFilling: true,
        zonePicking: true,
        zoomOut: true,
        zoom: true,
        autoRangeAndZonePicking: true,
        fftDimension1: true,
        fftDimension2: true,
      },
    },
  };
}
