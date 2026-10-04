export type HighlightMode = 'show' | 'permanent' | 'clear';

export interface HighlightCommand {
  ids: string[];
  mode: HighlightMode;
}

type HighlightListener = (command: HighlightCommand) => void;

const listeners = new Set<HighlightListener>();
let queuedCommand: HighlightCommand | null = null;

export function applyPeakHighlight(ids: string[], mode: HighlightMode): void {
  queuedCommand = { ids, mode };
  for (const listener of listeners) {
    listener(queuedCommand);
  }
}

export function subscribePeakHighlight(
  listener: HighlightListener,
): () => void {
  listeners.add(listener);
  if (queuedCommand) {
    listener(queuedCommand);
  }
  return () => {
    listeners.delete(listener);
  };
}
