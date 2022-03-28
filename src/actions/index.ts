import * as Actions from 'nmrium/lib/component/reducer/types/Types';
import { Action } from '../hooks/useActions';
import peaksChangeHandler from './peaksChangeHandler';

export const ACTIONS: Action[] = [
  {
    names: [
      Actions.ADD_PEAK,
      Actions.DELETE_PEAK_NOTATION,
      Actions.SHIFT_SPECTRUM,
    ],
    handler: peaksChangeHandler,
  },
];
