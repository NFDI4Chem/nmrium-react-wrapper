import { WorkspacePreferences } from 'nmr-load-save';
import { NMRiumWorkspace } from 'nmrium';
import { useLayoutEffect, useState } from 'react';

interface Preferences {
  preferences: WorkspacePreferences | undefined;
  workspace: NMRiumWorkspace | undefined;
  defaultEmptyMessage: string | undefined;
}

const DEFAULT_PREFERENCES = {
  preferences: undefined,
  workspace: undefined,
  defaultEmptyMessage: undefined,
};

export function usePreferences() {
  const [configuration, setConfiguration] =
    useState<Preferences>(DEFAULT_PREFERENCES);

  useLayoutEffect(() => {
    const { href } = window.location;
    const parameters = new URL(href).searchParams;

    let preferences: WorkspacePreferences | undefined;
    let workspace: NMRiumWorkspace | undefined;
    let defaultEmptyMessage: string | undefined;

    if (parameters.has('workspace')) {
      workspace = parameters.get('workspace') as NMRiumWorkspace;
    }
    if (parameters.has('preferences')) {
      preferences = JSON.parse(parameters.get('preferences') || '');
    }

    if (parameters.has('defaultEmptyMessage')) {
      defaultEmptyMessage = parameters.get('defaultEmptyMessage') as string;
    }
    setConfiguration({ preferences, workspace, defaultEmptyMessage });
  }, []);

  return configuration;
}
