export interface Observer {
  readonly id: string;
  update: (data: unknown) => void;
}

export class Subject {
  private observers: Observer[] = [];

  subscribe(observer: Observer) {
    this.observers.push(observer);
  }

  unsubscribe(observerID: string) {
    this.observers = this.observers.filter((_observer) => {
      return _observer.id !== observerID;
    });
  }

  notify(data: unknown) {
    this.observers.forEach((observer) => {
      observer.update(data);
    });
  }
}
