import { State } from 'nmrium/lib/component/reducer/Reducer';

export default function peaksChangeHandler(data: State) {
  if (window.parent && data.activeSpectrum?.id) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { peaks, info } = data.data[data.activeSpectrum.index] as any;
    window.parent.postMessage(
      { type: 'peaks', data: peaks, layout: info.nucleus },
      '*',
    );
  }
}
