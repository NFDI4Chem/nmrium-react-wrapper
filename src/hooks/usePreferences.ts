import type {
  CustomWorkspaces,
  WorkspacePreferences,
} from '@zakodium/nmrium-core';
import type { NMRiumWorkspace } from 'nmrium';

import type { WorkspaceOptions } from '../workspaces/integration.js';
import { getIntegrationWorkspace } from '../workspaces/integration.js';
import { getNmrXivWorkspace } from '../workspaces/nmrxiv.js';

export function usePreferences() {
  const { href } = window.location;
  const parameters = new URL(href).searchParams;

  let preferences: WorkspacePreferences | undefined;
  let workspace: NMRiumWorkspace | undefined;
  let defaultEmptyMessage: string | undefined;
  let hidePanelOnLoad = false;
  let disableImport = false;

  if (parameters.has('workspace')) {
    workspace = parameters.get('workspace') as NMRiumWorkspace;
  }

  if (parameters.has('preferences')) {
    preferences = JSON.parse(parameters.get('preferences') || '');
  }

  if (parameters.has('defaultEmptyMessage')) {
    defaultEmptyMessage = parameters.get('defaultEmptyMessage') as string;
  }
  if (parameters.has('hidePanelOnLoad')) {
    hidePanelOnLoad =
      parameters.get('hidePanelOnLoad')?.toLowerCase() === 'true';
  }
  if (parameters.has('disableImport')) {
    disableImport = parameters.get('disableImport')?.toLowerCase() === 'true';
  }

  const customWorkspaces = createCustomWorkspaces({
    hidePanelOnLoad,
    disableImport,
  });

  if (parameters.has('workspace')) {
    workspace = parameters.get('workspace') as NMRiumWorkspace;
  }

  if (parameters.has('preferences')) {
    preferences = JSON.parse(parameters.get('preferences') || '');
  }

  if (parameters.has('defaultEmptyMessage')) {
    defaultEmptyMessage = parameters.get('defaultEmptyMessage') as string;
  }
  if (parameters.has('hidePanelOnLoad')) {
    hidePanelOnLoad =
      parameters.get('hidePanelOnLoad')?.toLowerCase() === 'true';
  }

  return {
    preferences,
    workspace,
    defaultEmptyMessage,
    customWorkspaces,
  };
}

type CreateCustomWorkspacesOptions = WorkspaceOptions;

function createCustomWorkspaces(
  options: CreateCustomWorkspacesOptions,
): CustomWorkspaces {
  const { hidePanelOnLoad, disableImport } = options;

  return {
    integration: getIntegrationWorkspace({ disableImport, hidePanelOnLoad }),
    nmrXiv: getNmrXivWorkspace(hidePanelOnLoad),
  };
}
