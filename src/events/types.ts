import type { FilterOptions } from 'file-collection';
import type { NMRiumData, NMRiumState } from 'nmrium';

interface BlobObject {
  blob: Blob;
  width: number;
  height: number;
}
type EventType =
  'load' | 'data-change' | 'error' | 'action-request' | 'action-response';

type LoadData =
  | {
      data: string[];
      activeTab?: string;
      fileFilter?: FilterOptions;
      type: 'url';
    }
  | {
      data: File[];
      activeTab?: string;
      fileFilter?: FilterOptions;
      type: 'file';
    }
  | {
      data: NMRiumData;
      type: 'nmrium';
      activeTab?: string;
    };

interface HighlightPeakParams {
  /** Peak id from `spectrum.peaks.values[].id`. */
  id?: string;
  /** Nucleus tab to activate before highlighting, for example `1H` or `13C`. */
  nucleus?: string;
  /** Chemical shift in ppm. Used when `id` is omitted. */
  ppm?: number;
  /** Maximum distance in ppm when matching by `nucleus` and `ppm`. Defaults to 0.05. */
  tolerance?: number;
  /**
   * `true` keeps the highlight until the next highlight or `clearHighlight`.
   * `false` applies a temporary highlight. Defaults to `true`.
   */
  permanent?: boolean;
}

type ActionRequest =
  | {
      type: 'exportSpectraViewerAsBlob';
    }
  | {
      type: 'selectTab';
      params: { tab: string };
    }
  | {
      type: 'highlightPeak';
      params: HighlightPeakParams;
    }
  | {
      type: 'clearHighlight';
    };

interface ActionResponse {
  type: 'exportSpectraViewerAsBlob';
  data: BlobObject;
}

interface DataChange {
  state: NMRiumState;
  source: 'data' | 'view' | 'settings';
}

type EventData<T extends EventType> = T extends 'data-change'
  ? DataChange
  : T extends 'load'
    ? LoadData
    : T extends 'action-request'
      ? ActionRequest
      : T extends 'action-response'
        ? ActionResponse
        : T extends 'error'
          ? Error
          : never;
export type { EventData, EventType, HighlightPeakParams };
