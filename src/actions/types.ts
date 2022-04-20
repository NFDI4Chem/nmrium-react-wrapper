import { NMRiumData } from 'nmrium';

type EventType = 'load' | 'test';

interface TestData {
  testData: string;
}

type EventData<T extends EventType> = T extends 'load'
  ? NMRiumData
  : T extends 'test'
  ? TestData
  : never;
export type { EventType, EventData };
