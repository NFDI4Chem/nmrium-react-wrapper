import { NMRiumData } from 'nmrium';

type Actions = 'load' | 'test';

interface TestData {
  testData: string;
}

type EventData<T extends Actions> = T extends 'load'
  ? NMRiumData
  : T extends 'test'
  ? TestData
  : never;
export type { Actions, EventData };
