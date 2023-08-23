import { NMRiumData, NMRiumState } from 'nmrium';
import { BlobObject } from 'nmrium/lib/component/utility/export';

type EventType =
  | 'load'
  | 'data-change'
  | 'error'
  | 'action-request'
  | 'action-response';

type LoadData =
  | {
      data: string[];
      type: 'url';
    }
  | {
      data: File[];
      type: 'file';
    }
  | {
      data: NMRiumData;
      type: 'nmrium';
    };

type ActionRequest = {
  type: 'exportSpectraViewerAsBlob';
  // params?: any;
};

type ActionResponse = {
  type: 'exportSpectraViewerAsBlob';
  data: BlobObject;
};

type DataChange = {
  state: NMRiumState;
  source: 'data' | 'view' | 'settings';
};

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
export type { EventType, EventData };
