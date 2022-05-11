import {
  FILES_TYPES,
  getFileExtension,
} from 'nmrium/lib/component/utility/FileUtility';
import { addBruker, addJcamp, addJDF } from 'nmrium/lib/data/SpectraManager';
import { useCallback, useMemo, useState } from 'react';
import { Datum1D } from 'nmrium/lib/data/types/data1d';
import { Datum2D } from 'nmrium/lib/data/types/data2d';
import events from '../events';
import observableEvents from '../observables';

type Spectrum = Datum1D | Datum2D;

export function loadFromURLs(
  urls: string[],
): Promise<Array<{ value: ArrayBuffer; extension: string }>> {
  const fetches = urls.map((url) =>
    fetch(url)
      .then((response) => response.arrayBuffer())
      .then((value) => {
        return { value, extension: getFileExtension(url) };
      }),
  );

  return Promise.all(fetches);
}

function castToPromise(func, file, usedColors) {
  return new Promise((resolve) => {
    const spectra = [];
    func(spectra, file, {}, usedColors);
    resolve(spectra);
  });
}

function flatArray(spectra: Array<Spectrum[]>): Spectrum[] {
  if (!spectra || spectra.length === 0) {
    return [];
  }

  return spectra.reduce((acc, data) => {
    if (data) {
      return acc.concat(data as Spectrum[]);
    }
    return acc;
  }, []);
}

export function useLoadSpectraFromURL() {
  const [data, setData] = useState<Spectrum[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);

  const load = useCallback(async (urls: string[]) => {
    setLoading(true);
    const loadedFiles = await loadFromURLs(urls);

    const usedColors = { '1d': [], '2d': [] };

    try {
      const callPromises = loadedFiles.map(({ value, extension }) => {
        const file = value;

        switch (extension) {
          case FILES_TYPES.JDX:
          case FILES_TYPES.DX: {
            return castToPromise(addJcamp, file, usedColors);
          }
          case FILES_TYPES.JDF: {
            return castToPromise(addJDF, file, usedColors);
          }
          case FILES_TYPES.ZIP: {
            return addBruker({}, file, usedColors);
          }

          default:
            throw new Error('The file extension must be zip, dx, jdx, jdf');
        }
      });
      const spectra = (await Promise.all(callPromises)) as Spectrum[][];

      const result = flatArray(spectra);

      setData(result);
      setLoading(false);
    } catch (error: any) {
      events.trigger('error', error);
      observableEvents.trigger('error', error);
      // eslint-disable-next-line no-console
      console.log(error);
    }
  }, []);

  return useMemo(
    () => ({
      data,
      load,
      isLoading,
    }),
    [data, isLoading, load],
  );
}
