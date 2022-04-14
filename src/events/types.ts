type Actions = 'load' | 'test';

interface LoadSpectra {
  urls: string[];
}
interface TestData {
  testData: string;
}

type EventData<T extends Actions> = T extends 'load'
  ? LoadSpectra
  : T extends 'test'
  ? TestData
  : never;
export type { Actions, EventData };
