import memoize from 'fast-memoize';
import { ApplicationState } from '../..';

const getRepositoriesSlow = (state: ApplicationState) =>
  state.getIn(['repositories', 'data']).toJS();

export const getData = memoize(getRepositoriesSlow);
