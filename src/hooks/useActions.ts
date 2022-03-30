import { State } from 'nmrium/lib/component/reducer/Reducer';
import { useCallback, useEffect, useRef } from 'react';
import { ACTIONS } from '../actions';

type Handler = (data: State) => void;
export interface Action {
  names: string[];
  handler: Handler;
}

export default function useActions() {
  const mapActions = useRef<Record<string, Handler>>({});

  useEffect(() => {
    mapActions.current = ACTIONS.reduce((acc, action) => {
      action.names.forEach((actionName) => {
        acc[actionName] = action.handler;
      });
      return acc;
    }, {});
  }, []);

  return useCallback((data: State) => {
    mapActions.current[data.actionType]?.(data);
  }, []);
}
