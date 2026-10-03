declare module 'nmrium-highlight-original' {
  import type { PropsWithChildren } from 'react';

  export function isHighlightEventSource(
    source: unknown,
    ...types: string[]
  ): boolean;

  export function HighlightProvider(
    props: PropsWithChildren,
  ): import('react').JSX.Element;

  export function useHighlightData(): {
    highlight: {
      highlighted: string[];
      highlightedPermanently: string[];
    };
    dispatch: (action: {
      type: 'HIDE' | 'SHOW' | 'SET_PERMANENT' | 'UNSET_PERMANENT';
      payload?: {
        convertedHighlights?: string[];
        sourceData?: {
          type: 'PEAK';
          extra: { id: string; spectrumID?: string };
        } | null;
      };
    }) => void;
    remove: () => void;
  };

  export function useHighlight(
    highlights: Array<string | number>,
    sourceData?: unknown,
  ): unknown;
}
