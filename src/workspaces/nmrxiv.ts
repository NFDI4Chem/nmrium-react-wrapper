import type { InnerWorkspace } from 'nmr-load-save';

export function getNmrXivWorkspace(hidePanelOnLoad = false): InnerWorkspace {
  return {
    label: 'nmrXiv',
    general: {
      dimmedSpectraOpacity: 0.1,
      verticalSplitterPosition: '160px',
      verticalSplitterCloseThreshold: 600,
      spectraRendering: 'auto',
      loggingLevel: 'info',
      invert: false,
      popupLoggingLevel: 'error',
      invertScroll: false,
    },
    display: {
      general: {
        experimentalFeatures: {
          display: true,
          visible: true,
        },
        hidePanelOnLoad,
        hideHelp: true,
        hideLogs: true,
        hideWorkspaces: true,
        hideGeneralSettings: true,
      },

      panels: {
        spectraPanel: { display: true, visible: true, open: true },
        informationPanel: { display: true, visible: true, open: false },
        rangesPanel: { display: true, visible: true, open: false },
        structuresPanel: { display: true, visible: true, open: false },
        processingsPanel: { display: true, visible: true, open: false },
        zonesPanel: { display: true, visible: true, open: false },
        summaryPanel: { display: true, visible: true, open: false },
        automaticAssignmentPanel: {
          display: false,
          visible: true,
          open: false,
        },
        simulationPanel: { display: false, visible: true, open: false },
        predictionPanel: { display: false, visible: true, open: false },
        peaksPanel: { display: false, visible: true, open: false },
        multipleSpectraAnalysisPanel: {
          display: false,
          visible: true,
          open: false,
        },
        matrixGenerationPanel: { display: false, visible: true, open: false },
        integralsPanel: { display: false, visible: true, open: false },
        databasePanel: { display: false, visible: true, open: false },
      },
      toolBarButtons: {
        baselineCorrection: true,
        exclusionZones: true,
        exportAs: true,
        fft: true,
        import: true,
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
    onLoadProcessing: {
      autoProcessing: true,
    },
  };
}
