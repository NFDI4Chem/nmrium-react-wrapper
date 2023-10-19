import { Spectrum } from 'nmr-load-save';
import { BaseFilter, Filter, Filters, Nucleus } from 'nmr-processing';

const ConfigOnLoadProcessing: Partial<Record<Nucleus, BaseFilter[]>> = {
  '1H': [
    {
      name: Filters.digitalFilter.id,
      label: Filters.digitalFilter.name,
      value: {},
      flag: true,
    },
    {
      name: Filters.apodization.id,
      label: Filters.apodization.name,
      value: {},
      flag: false,
    },
    {
      name: Filters.zeroFilling.id,
      label: Filters.zeroFilling.name,
      value: {},
      flag: true,
    },
    {
      name: Filters.fft.id,
      label: Filters.fft.name,
      value: {},
      flag: true,
    },
    {
      name: Filters.phaseCorrection.id,
      label: Filters.phaseCorrection.name,

      value: {},
      flag: true,
    },
  ],
  '13C': [
    {
      name: Filters.digitalFilter.id,
      label: Filters.digitalFilter.name,

      value: {},
      flag: true,
    },
    {
      name: Filters.apodization.id,
      label: Filters.apodization.name,
      value: {},
      flag: true,
    },
    {
      name: Filters.zeroFilling.id,
      label: Filters.zeroFilling.name,

      value: {},
      flag: true,
    },
    {
      name: Filters.fft.id,
      label: Filters.fft.name,

      value: {},
      flag: true,
    },
    {
      name: Filters.phaseCorrection.id,
      label: Filters.phaseCorrection.name,

      value: {},
      flag: true,
    },
  ],
};

function nucleusToString(nucleus: string | string[]) {
  return typeof nucleus === 'string' ? nucleus : nucleus.join(',');
}

interface filterFiltersOptions {
  digitalFilter?: number;
}

function mapFilters(
  onLoadfilters: BaseFilter[],
  options: filterFiltersOptions,
) {
  const { digitalFilter } = options;
  const filters: BaseFilter[] = [];

  for (let filter of onLoadfilters) {
    if (
      (!digitalFilter && filter.name === Filters.digitalFilter.id) ||
      !filter.flag
    ) {
      continue;
    }
    const isDeleteAllow = !(filter.name === Filters.digitalFilter.id);
    filter = { ...filter, isDeleteAllow };
    filters.push(filter);
  }
  return filters;
}

export function appendFilters(spectra: Spectrum[]) {
  for (const spectrum of spectra) {
    const {
      info: { nucleus, isFid, digitalFilter },
      filters,
    } = spectrum;
    const hasFilters = filters.length > 0;
    if (isFid && !hasFilters) {
      const n = nucleusToString(nucleus);
      const onLoadfilters: BaseFilter[] = ConfigOnLoadProcessing?.[n] || [];
      if (onLoadfilters.length > 0) {
        const autofilters = mapFilters(onLoadfilters, { digitalFilter });
        spectrum.filters = autofilters as Filter[];
      }
    }
  }
}
