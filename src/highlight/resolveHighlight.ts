import type { HighlightParams } from '../events/types.js';

export const DEFAULT_HIGHLIGHT_TOLERANCE_PPM = 0.05;

interface PeakLike {
  id?: string;
  x?: number;
}

interface SignalLike {
  id?: string;
  delta?: number;
}

interface RangeLike {
  id?: string;
  from?: number;
  to?: number;
  signals?: SignalLike[];
}

interface SpectrumLike {
  id?: string;
  info?: { nucleus?: string | string[] };
  peaks?: { values?: PeakLike[] };
  ranges?: { values?: RangeLike[] };
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
      reason: 'invalid' | 'not-loaded' | 'not-available' | 'no-match';
      message: string;
    };

interface Candidate {
  id: string;
  position: number;
  /** Ids highlighted together with the match (parent range, contained peaks). */
  relatedIds: string[];
}

interface Target {
  /** Singular noun used in error messages, for example `peak`. */
  label: string;
  candidates: (spectrum: SpectrumLike) => Candidate[];
}

const ACCEPTED_PARAMS =
  "Property 'params' requires 'id', or both 'nucleus' and 'ppm'.";

function nucleusMatches(spectrum: SpectrumLike, nucleus: string): boolean {
  const value = spectrum.info?.nucleus;
  const expected = nucleus.toUpperCase();
  if (typeof value === 'string') {
    return value.toUpperCase() === expected;
  }
  if (Array.isArray(value)) {
    return value.some(
      (entry) => typeof entry === 'string' && entry.toUpperCase() === expected,
    );
  }
  return false;
}

function peakValues(spectrum: SpectrumLike): PeakLike[] {
  const values = spectrum.peaks?.values;
  return Array.isArray(values) ? values : [];
}

function rangeValues(spectrum: SpectrumLike): RangeLike[] {
  const values = spectrum.ranges?.values;
  return Array.isArray(values) ? values : [];
}

function peakCandidates(spectrum: SpectrumLike): Candidate[] {
  const candidates: Candidate[] = [];
  for (const peak of peakValues(spectrum)) {
    if (peak.id && typeof peak.x === 'number') {
      candidates.push({ id: peak.id, position: peak.x, relatedIds: [] });
    }
  }
  return candidates;
}

function peakIdsWithin(spectrum: SpectrumLike, range: RangeLike): string[] {
  if (typeof range.from !== 'number' || typeof range.to !== 'number') {
    return [];
  }
  const min = Math.min(range.from, range.to);
  const max = Math.max(range.from, range.to);
  const ids: string[] = [];
  for (const peak of peakValues(spectrum)) {
    if (
      peak.id &&
      typeof peak.x === 'number' &&
      peak.x >= min &&
      peak.x <= max
    ) {
      ids.push(peak.id);
    }
  }
  return ids;
}

function signalCandidates(spectrum: SpectrumLike): Candidate[] {
  const candidates: Candidate[] = [];
  for (const range of rangeValues(spectrum)) {
    const signals = Array.isArray(range.signals) ? range.signals : [];
    const relatedIds = [
      ...(range.id ? [range.id] : []),
      ...peakIdsWithin(spectrum, range),
    ];
    for (const signal of signals) {
      if (signal.id && typeof signal.delta === 'number') {
        candidates.push({ id: signal.id, position: signal.delta, relatedIds });
      }
    }
  }
  return candidates;
}

const PEAK_TARGET: Target = { label: 'peak', candidates: peakCandidates };
const SIGNAL_TARGET: Target = { label: 'signal', candidates: signalCandidates };

function toIds(candidate: Candidate): string[] {
  return [...new Set([candidate.id, ...candidate.relatedIds])];
}

function resolve(
  target: Target,
  state: HighlightableState | null | undefined,
  params: HighlightParams,
): ResolveHighlightResult {
  const id = params.id?.trim();
  const nucleus = params.nucleus?.trim();
  const { ppm } = params;
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

  const searched = nucleus
    ? spectra.filter((spectrum) => nucleusMatches(spectrum, nucleus))
    : spectra;
  const candidates = searched.flatMap((spectrum) =>
    target.candidates(spectrum),
  );

  if (candidates.length === 0) {
    return {
      ok: false,
      reason: 'not-available',
      message: `No ${target.label}s are available${nucleus ? ` for ${nucleus}` : ''}.`,
    };
  }

  if (id) {
    const match = candidates.find((candidate) => candidate.id === id);
    return match
      ? { ok: true, ids: toIds(match) }
      : {
          ok: false,
          reason: 'no-match',
          message: `No ${target.label} with id '${id}'.`,
        };
  }

  let closest: { candidate: Candidate; distance: number } | null = null;
  for (const candidate of candidates) {
    const distance = Math.abs(candidate.position - (ppm as number));
    if (distance <= tolerance && (!closest || distance < closest.distance)) {
      closest = { candidate, distance };
    }
  }

  return closest
    ? { ok: true, ids: toIds(closest.candidate) }
    : {
        ok: false,
        reason: 'no-match',
        message: `No ${nucleus} ${target.label} within ${tolerance} ppm of ${ppm}.`,
      };
}

export function resolveHighlightPeak(
  state: HighlightableState | null | undefined,
  params: HighlightParams,
): ResolveHighlightResult {
  return resolve(PEAK_TARGET, state, params);
}

/**
 * Resolves a 1D signal. The result also contains the parent range id and the
 * ids of peaks inside that range, so the range and its peaks highlight too.
 */
export function resolveHighlightSignal(
  state: HighlightableState | null | undefined,
  params: HighlightParams,
): ResolveHighlightResult {
  return resolve(SIGNAL_TARGET, state, params);
}
