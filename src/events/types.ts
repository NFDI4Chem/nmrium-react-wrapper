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

type ActionRequest =
  | {
      type: 'exportSpectraViewerAsBlob';
    }
  | {
      type: 'selectTab';
      params: { tab: string };
    }
  | {
      type: 'highlight';
      /**
       * Ids passed to NMRium's `highlightedIds`, for example peak, range or
       * signal ids. Replaces the previous host highlight.
       */
      params: { ids: string[] };
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
export type { EventData, EventType };
