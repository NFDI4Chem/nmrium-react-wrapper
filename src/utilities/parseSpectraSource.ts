export interface SpectraSource {
  source: string;
  id: string;
}

/**
 * Parses a `spectra` query parameter in the format `<source>:<id>` and returns an object with `source` and `id` properties.
 *
 * Example:
 * `nmrxiv:S2173` => { source: 'nmrxiv', id: 'S2173' }
 */
export function parseSpectraSource(
  value: string | null,
): SpectraSource | undefined {
  if (!value) return undefined;

  const separatorIndex = value.indexOf(':');
  if (separatorIndex === -1) return undefined;

  const source = value.slice(0, separatorIndex).trim();
  const id = value.slice(separatorIndex + 1).trim();
  if (!source || !id) return undefined;

  return { source, id };
}
