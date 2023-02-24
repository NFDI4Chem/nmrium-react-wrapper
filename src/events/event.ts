import { EventType, EventData } from './types';
import ALLOWED_ORIGINS from '../allowed-origins.json';

const namespace = 'nmr-wrapper';

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

    const url = new URL(origin);

    const skipOriginCheck =
      ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes('*');

    if (!skipOriginCheck && !ALLOWED_ORIGINS.includes(url.origin)) {
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
