import { loadNmrXivSpectraById } from './nmrxiv.js';

export type SpectraSource = 'nmrxiv';

type SpectraSourceLoader = (id: string) => Promise<object>;

const spectraSourceLoaders: Record<SpectraSource, SpectraSourceLoader> = {
  nmrxiv: loadNmrXivSpectraById,
};

export async function loadSpectraFromSource(
  source: string,
  id: string,
): Promise<object> {
  const loader = spectraSourceLoaders[source];
  if (!loader) {
    throw new Error(`Unknown spectra source: "${source}"`);
  }
  return loader(id);
}
