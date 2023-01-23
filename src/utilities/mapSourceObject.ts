import { Spectrum1D } from 'nmr-load-save/lib/types/Spectra/Spectrum1D';
import { Spectrum2D } from 'nmr-load-save/lib/types/Spectra/Spectrum2D';

export function mapSourceObject(inputSpectra: (Spectrum1D | Spectrum2D)[]) {
  const spectra = inputSpectra.slice();
  // eslint-disable-next-line no-restricted-syntax
  for (const spectrum of spectra) {
    if (spectrum.source) {
      const files = spectrum.source?.files?.map((file) => {
        const { name, relativePath, size = -1, lastModified = 0 } = file as any;
        return { name, relativePath, size, lastModified };
      }, []);

      spectrum.source = { ...spectrum.source, files };
    }
  }
  return spectra;
}
