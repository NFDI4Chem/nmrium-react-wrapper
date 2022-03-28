import { State } from 'nmrium/lib/component/reducer/Reducer';

export default function peaksChangeHandler(data: State) {
  if (window.parent && data.activeSpectrum?.id) {
    const { peaks, info } = data.data[data.activeSpectrum.index] as any;
    console.log(peaks, info);
    window.parent.postMessage(
      { type: 'peaks', data: peaks, layout: info.nucleus },
      '*',
    );
  }
}
