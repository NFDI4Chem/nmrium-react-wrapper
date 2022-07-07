import { NMRiumData } from 'nmrium';
import { State } from 'nmrium/lib/component/reducer/Reducer';
import { File } from '../hooks/useLoadSpectra';

type EventType = 'load' | 'dataChange' | 'loadURLs' | 'loadFiles' | 'error';

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

type EventData<T extends EventType> = T extends 'dataChange'
  ? State
  : T extends 'load'
  ? LoadData
  : T extends 'error'
  ? Error
  : never;
export type { EventType, EventData };
