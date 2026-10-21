import { nmrXivConfig } from '../config/nmrxiv/index.js';

function getNmrXivSpectraJsonURL(id: string): string {
  if (!/^[SP][0-9]+$/.test(id) || id.trim() !== id) {
    throw new Error(
      `Invalid nmrXiv sample ID: "${id}". Expected "S" or "P" followed by digits.`,
    );
  }
  return `${nmrXivConfig.baseURL}/${id}/nmriumInfo`;
}

export async function loadNmrXivSpectraById(id: string): Promise<object> {
  const response = await fetch(getNmrXivSpectraJsonURL(id));

  if (!response.ok) {
    throw new Error(
      `Failed to fetch nmrXiv spectra "${id}" (status ${response.status})`,
    );
  }

  return response.json();
}
