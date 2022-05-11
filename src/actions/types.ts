import { NMRiumData } from 'nmrium';

type EventType = 'load' | 'test' | 'loadURLs' | 'error';

interface TestData {
  testData: string;
}
interface LoadURLs {
  urls: string[];
}

type EventData<T extends EventType> = T extends 'load'
  ? NMRiumData
  : T extends 'test'
  ? TestData
  : T extends 'loadURLs'
  ? LoadURLs
  : T extends 'error'
  ? Error
  : never;
export type { EventType, EventData };
