import { NMRiumPreferences, NMRiumWorkspace } from 'nmrium';
import { useLayoutEffect, useState } from 'react';

export function usePreferences() {
  const [configuration, setConfiguration] = useState<{
    preferences: NMRiumPreferences;
    workspace: NMRiumWorkspace;
  }>({ preferences: {}, workspace: 'default' });

  useLayoutEffect(() => {
    const { href } = window.location;
    const parameters = new URL(href).searchParams;

    const toolBarButtons = { peakTool: true };
    let preferences: NMRiumPreferences = { toolBarButtons: toolBarButtons };
    let workspace: NMRiumWorkspace = 'default';

    if (parameters.has('workspace')) {
      workspace = parameters.get('workspace') as NMRiumWorkspace;
    }
    if (parameters.has('preferences')) {
      preferences = JSON.parse(
        parameters.get('preferences') || '',
      ) as NMRiumPreferences;
    }
    setConfiguration({ preferences, workspace });
  }, []);

  return configuration;
}
