import produce from 'immer';

import { ReducerAction } from '../types';

import { Types, GitHub } from './types';

export const INITIAL_STATE: GitHub = {
  status: 0,
  data: null,
};

export default function gitHubReducer(
  state = INITIAL_STATE,
  action: ReducerAction,
): GitHub {
  return produce(state, draft => {
    switch (action.type) {
      case Types.GET_USER: {
        break;
      }
      case Types.GET_USER_SUCCESS: {
        draft.data = action.payload.data;
        break;
      }
      case Types.GET_USER_FAILURE: {
        break;
      }
      case Types.GET_USER_CLEAR: {
        draft.data = null;
        break;
      }
      default:
    }
  });
}
