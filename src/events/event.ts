import { Actions, EventData } from './types';

const namespace = 'nmr-wrapper';

function trigger<T extends Actions>(action: T, data: EventData<T>) {
  const event = new CustomEvent(`${namespace}:${action}`, {
    detail: data,
  });
  window.dispatchEvent(event);
}

function on<T extends Actions>(
  action: T,
  dataListener: (data: EventData<T>, event?: Event) => void,
  options?: boolean | AddEventListenerOptions,
) {
  function listener(object: Event) {
    const { detail, ...event } = object as CustomEvent;
    dataListener?.(detail, event);
  }
  window.addEventListener(`${namespace}:${action}`, listener, options);
}

function clean(action: Actions, listener: (object: Event) => void) {
  window.removeEventListener(`${namespace}:${action}`, listener);
}

export default { trigger, on, clean };
