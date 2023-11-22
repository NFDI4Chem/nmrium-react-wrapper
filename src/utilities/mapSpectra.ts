/* eslint-disable @typescript-eslint/dot-notation */
import { Spectrum } from 'nmr-load-save';

export function mapSpectra(spectra?: Spectrum[]) {
  if (!spectra) return [];

  return spectra.map((spectrum) => {
    const cloneSpectrum = { ...spectrum };
    if ('logger' in cloneSpectrum || 'keepSource' in cloneSpectrum) {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete cloneSpectrum['logger'];
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete cloneSpectrum['keepSource'];
    }
    return cloneSpectrum;
  }, []);
}
