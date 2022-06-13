import { NMRiumData } from 'nmrium';
import { State } from 'nmrium/lib/component/reducer/Reducer';

type EventType = 'load' | 'dataChange' | 'loadURLs' | 'error';

interface LoadURLs {
  urls: string[];
}

type EventData<T extends EventType> = T extends 'load'
  ? NMRiumData
  : T extends 'dataChange'
  ? State
  : T extends 'loadURLs'
  ? LoadURLs
  : T extends 'error'
  ? Error
  : never;
export type { EventType, EventData };
