import type { HighlightPeakParams } from '../events/types.js';

export const DEFAULT_HIGHLIGHT_TOLERANCE_PPM = 0.05;

interface PeakLike {
  id?: string;
  x?: number;
}

interface SpectrumLike {
  id?: string;
  info?: { nucleus?: string | string[] };
  peaks?: { values?: PeakLike[] };
}

export interface HighlightableState {
  data?: {
    spectra?: SpectrumLike[];
  };
}

export type ResolveHighlightResult =
  | { ok: true; ids: string[] }
  | {
      ok: false;
      reason: 'invalid' | 'not-loaded' | 'no-peaks' | 'no-match';
      message: string;
    };

const ACCEPTED_PARAMS =
  "Property 'params' requires 'id', or both 'nucleus' and 'ppm'.";

function nucleusMatches(spectrum: SpectrumLike, nucleus: string): boolean {
  const value = spectrum.info?.nucleus;
  if (typeof value === 'string') {
    return value.toUpperCase() === nucleus.toUpperCase();
  }
  if (Array.isArray(value)) {
    return value.some(
      (entry) =>
        typeof entry === 'string' &&
        entry.toUpperCase() === nucleus.toUpperCase(),
    );
  }
  return false;
}

function peakValues(spectrum: SpectrumLike): PeakLike[] {
  const values = spectrum.peaks?.values;
  return Array.isArray(values) ? values : [];
}

export function resolveHighlightPeak(
  state: HighlightableState | null | undefined,
  params: HighlightPeakParams,
): ResolveHighlightResult {
  const id = params.id?.trim();
  const nucleus = params.nucleus?.trim();
  const ppm = params.ppm;
  const tolerance = params.tolerance ?? DEFAULT_HIGHLIGHT_TOLERANCE_PPM;
  const hasPpm = typeof ppm === 'number' && Number.isFinite(ppm);

  if (!id && (!nucleus || !hasPpm)) {
    return { ok: false, reason: 'invalid', message: ACCEPTED_PARAMS };
  }

  if (!Number.isFinite(tolerance) || tolerance < 0) {
    return {
      ok: false,
      reason: 'invalid',
      message: "Property 'tolerance' must be a non-negative number.",
    };
  }

  const spectra = state?.data?.spectra;
  if (!Array.isArray(spectra)) {
    return {
      ok: false,
      reason: 'not-loaded',
      message: 'No spectrum is loaded.',
    };
  }

  if (id) {
    let sawPeaks = false;
    for (const spectrum of spectra) {
      const values = peakValues(spectrum);
      if (values.length > 0) {
        sawPeaks = true;
      }
      const match = values.find((peak) => peak.id === id);
      if (match?.id) {
        return { ok: true, ids: [match.id] };
      }
    }
    if (!sawPeaks) {
      return {
        ok: false,
        reason: 'no-peaks',
        message: 'Peaks are not available yet.',
      };
    }
    return {
      ok: false,
      reason: 'no-match',
      message: `No peak with id '${id}'.`,
    };
  }

  const candidates = spectra.filter((spectrum) =>
    nucleusMatches(spectrum, nucleus ?? ''),
  );
  let closest: { id: string; distance: number } | null = null;
  let sawPeaks = false;

  for (const spectrum of candidates) {
    for (const peak of peakValues(spectrum)) {
      if (typeof peak.x !== 'number' || !peak.id) {
        continue;
      }
      sawPeaks = true;
      const distance = Math.abs(peak.x - (ppm ?? 0));
      if (
        distance <= tolerance &&
        (closest === null || distance < closest.distance)
      ) {
        closest = { id: peak.id, distance };
      }
    }
  }

  if (closest) {
    return { ok: true, ids: [closest.id] };
  }
  if (!sawPeaks) {
    return {
      ok: false,
      reason: 'no-peaks',
      message: 'Peaks are not available yet.',
    };
  }
  return {
    ok: false,
    reason: 'no-match',
    message: `No ${nucleus} peak within ${tolerance} ppm of ${ppm}.`,
  };
}
