import { EventType, EventData } from './types';

const namespace = 'nmr-wrapper';

function trigger<T extends EventType>(type: T, data: EventData<T>) {
  window.parent.postMessage({ type: `${namespace}:${type}`, data }, '*');
}

function on<T extends EventType>(
  type: T,
  dataListener: (data: EventData<T>) => void,
  options: {
    eventOptions?: boolean | AddEventListenerOptions;
    allowedOrigins?: string[];
  } = {},
) {
  const { eventOptions, allowedOrigins = [] } = options;

  function listener(event: MessageEvent) {
    const {
      origin,
      data: { type: targetType, data },
    } = event;

    const url = new URL(origin);

    const skipOriginCheck =
      allowedOrigins.length === 0 || allowedOrigins.includes('*');

    if (!skipOriginCheck && !allowedOrigins.includes(url.origin)) {
      throw new Error(`Invalid Origin ${origin}`);
    }

    if (`${namespace}:${type}` === targetType) {
      dataListener?.(data);
    }
  }
  window.addEventListener(`message`, listener, eventOptions);

  return () => window.removeEventListener(`message`, listener);
}

export default { trigger, on };
