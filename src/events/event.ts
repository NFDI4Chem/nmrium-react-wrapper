import { EventType, EventData } from './types';
import { isIPAddress } from '../utilities/isIPAddress';

const ALLOWED_ORIGINS: string[] = [
  'https://nmrxiv.org',
  'http://nmrxiv.org',
  'http://localhost',
  'http://localhost:3000',
  'http://127.0.0.1:',
  'http://127.0.0.1:3000',
  'http://test.nmrxiv.org',
  'http://193.196.39.168',
  'http://193.196.39.168:3000',
  'https://nodejsdev.nmrxiv.org',
];

const namespace = 'nmr-wrapper';

function parseOrigin(origin: string) {
  let url: string | null = '';
  const urlSegments = origin.split('://');
  if (isIPAddress(origin)) {
    url = origin;
  } else {
    const hostSegments = urlSegments[1].split('.');
    const startIndex = hostSegments.length > 2 ? 1 : 0;
    url = `${urlSegments[0]}://${hostSegments
      .slice(hostSegments.length > 1 ? startIndex : 0)
      .join('.')}`;
  }

  return url;
}

function trigger<T extends EventType>(type: T, data: EventData<T>) {
  window.parent.postMessage({ type: `${namespace}:${type}`, data }, '*');
}

function on<T extends EventType>(
  type: T,
  dataListener: (data: EventData<T>) => void,
  options?: boolean | AddEventListenerOptions,
) {
  function listener(event: MessageEvent) {
    const {
      origin,
      data: { type: targetType, data },
    } = event;

    if (!ALLOWED_ORIGINS.includes(parseOrigin(origin))) {
      throw new Error(`Invalid Origin ${origin}`);
    }

    if (`${namespace}:${type}` === targetType) {
      dataListener?.(data);
    }
  }
  window.addEventListener(`message`, listener, options);

  return () => window.removeEventListener(`message`, listener);
}

export default { trigger, on };
