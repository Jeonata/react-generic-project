/* eslint-disable @typescript-eslint/no-explicit-any */
import { Action, CombinedState, combineReducers } from 'redux';

import { ReducerAction } from './types';

// REDUCERS
import gitHub from './gitHub/reducer';

const allReducers = combineReducers({
  gitHub,
});

function rootReducer(
  state: CombinedState<any> | undefined,
  action: Action<any>,
): any {
  return allReducers(state, action as ReducerAction);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
