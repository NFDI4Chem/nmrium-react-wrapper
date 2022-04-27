import { Subject, Observer } from './subject';
import { EventData, EventType } from '../actions/types';

const NAMESPACE = '__nmrium_events__';

function initSubject(event: EventType) {
  if (!window?.[NAMESPACE]?.[event]) {
    window[NAMESPACE] = {
      ...window[NAMESPACE],
      [event]: new Subject(),
    };
  }
}

function trigger<T extends EventType>(event: T, data: EventData<T>) {
  initSubject(event);
  window[NAMESPACE][event].notify(data);
}

function unsubscribe(event: EventType, observerID: string) {
  return () => {
    if (window?.[NAMESPACE]?.[event]) {
      window[NAMESPACE][event].unsubscribe(observerID);
    } else {
      throw new Error('No event Registered');
    }
  };
}

function subscribe<T extends EventType>(
  event: T,
  onData: (data: EventData<T>) => void,
) {
  initSubject(event);
  const id = Math.random().toString(36).slice(2, 9);

  const observer: Observer = { id, update: onData } as Observer;

  (window[NAMESPACE][event] as Subject).subscribe(observer);

  return unsubscribe(event, id);
}

export default { trigger, subscribe };
