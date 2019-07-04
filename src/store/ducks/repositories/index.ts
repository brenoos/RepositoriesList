import { Reducer } from 'redux';
import { fromJS } from 'immutable';
import { RepositoriesStateRecord, RepositoriesTypes } from './types';

const INITIAL_STATE: RepositoriesStateRecord = fromJS({
  data: [{ id: 1, name: 'breno Repo' }],
  error: false,
  loading: false,
});

const reducer: Reducer<RepositoriesStateRecord> = (
  state = INITIAL_STATE,
  action
) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return state.set('loading', false);
    case RepositoriesTypes.LOAD_SUCCESS:
      return state.withMutations(map => {
        map
          .set('loading', false)
          .set('error', false)
          .set('data', fromJS(action.payload.data));
      });
    case RepositoriesTypes.LOAD_FAILURE:
      return state.withMutations(map => {
        map
          .set('loading', false)
          .set('error', true)
          .set('data', []);
      });
    default:
      return state;
  }
};

export default reducer;
