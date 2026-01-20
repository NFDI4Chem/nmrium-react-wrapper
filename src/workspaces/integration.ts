import type { InnerWorkspace } from '@zakodium/nmrium-core';

export interface WorkspaceOptions {
  hidePanelOnLoad?: boolean;
  disableImport?: boolean;
}

export function getIntegrationWorkspace(
  options: WorkspaceOptions,
): InnerWorkspace {
  const { disableImport = false, hidePanelOnLoad = false } = options;
  return {
    label: 'Integration',
    general: {
      dimmedSpectraOpacity: 0.4,
      verticalSplitterPosition: '560px',
      verticalSplitterCloseThreshold: 600,
      spectraRendering: 'auto',
      loggingLevel: 'info',
      popupLoggingLevel: 'error',
      invert: true,
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
        import: !disableImport,
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
