import { WorkspacePreferences } from 'nmr-load-save';
import { NMRiumWorkspace } from 'nmrium';
import { useLayoutEffect, useState } from 'react';

export function usePreferences() {
  const [configuration, setConfiguration] = useState<{
    preferences: WorkspacePreferences | undefined;
    workspace: NMRiumWorkspace | undefined;
  }>({ preferences: undefined, workspace: undefined });

  useLayoutEffect(() => {
    const { href } = window.location;
    const parameters = new URL(href).searchParams;

    let preferences: WorkspacePreferences | undefined;
    let workspace: NMRiumWorkspace | undefined;

    if (parameters.has('workspace')) {
      workspace = parameters.get('workspace') as NMRiumWorkspace;
    }
    if (parameters.has('preferences')) {
      preferences = JSON.parse(parameters.get('preferences') || '');
    }
    setConfiguration({ preferences, workspace });
  }, []);

  return configuration;
}
