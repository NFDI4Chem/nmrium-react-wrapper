import {
  HighlightProvider as NmriumHighlightProvider,
  useHighlightData,
} from 'nmrium-highlight-original';
import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';

import { subscribePeakHighlight } from './highlightCommands.js';

export {
  isHighlightEventSource,
  useHighlight,
  useHighlightData,
} from 'nmrium-highlight-original';

export { applyPeakHighlight } from './highlightCommands.js';
export type { HighlightMode } from './highlightCommands.js';

function HighlightDispatcher() {
  const { dispatch, highlight } = useHighlightData();
  const highlightedRef = useRef(highlight.highlighted);

  useEffect(() => {
    highlightedRef.current = highlight.highlighted;
  }, [highlight.highlighted]);

  useEffect(() => {
    return subscribePeakHighlight(({ ids, mode }) => {
      const previous = highlightedRef.current;
      if (previous.length > 0) {
        dispatch({
          type: 'HIDE',
          payload: { convertedHighlights: previous },
        });
      }
      dispatch({ type: 'UNSET_PERMANENT' });

      if (mode === 'clear' || ids.length === 0) {
        return;
      }

      const sourceData = {
        type: 'PEAK' as const,
        extra: { id: ids[0] },
      };
      dispatch({
        type: 'SHOW',
        payload: { convertedHighlights: ids, sourceData },
      });
      if (mode === 'permanent') {
        dispatch({
          type: 'SET_PERMANENT',
          payload: { convertedHighlights: ids },
        });
      }
    });
  }, [dispatch]);

  return null;
}

export function HighlightProvider(props: PropsWithChildren) {
  return (
    <NmriumHighlightProvider>
      <HighlightDispatcher />
      {props.children}
    </NmriumHighlightProvider>
  );
}
