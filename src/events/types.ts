import { NMRiumData } from 'nmrium';
import { State } from 'nmrium/lib/component/reducer/Reducer';
import { File } from '../hooks/useLoadSpectra';

type EventType = 'load' | 'dataChange' | 'loadURLs' | 'loadFiles' | 'error';

interface LoadURLs {
  urls: string[];
}
interface LoadFiles {
  files: File[];
}

type EventData<T extends EventType> = T extends 'load'
  ? NMRiumData
  : T extends 'dataChange'
  ? State
  : T extends 'loadURLs'
  ? LoadURLs
  : T extends 'loadFiles'
  ? LoadFiles
  : T extends 'error'
  ? Error
  : never;
export type { EventType, EventData };
