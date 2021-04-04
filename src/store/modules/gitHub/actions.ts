import { ReducerAction } from '../types';

import { Types, Request } from './types';

export function getUserRequest(data: Request): ReducerAction {
  return {
    type: Types.GET_USER,
    payload: data,
  };
}
export function getUserSuccess(payload: unknown | object): ReducerAction {
  return {
    type: Types.GET_USER_SUCCESS,
    payload,
  };
}
export function getUserFailure(payload: boolean): ReducerAction {
  return {
    type: Types.GET_USER_FAILURE,
    payload,
  };
}
export function getUserClear(): ReducerAction {
  return {
    type: Types.GET_USER_CLEAR,
    payload: null,
  };
}
