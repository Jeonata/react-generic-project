import { takeLatest, call, put, all, StrictEffect } from 'redux-saga/effects';

// SERVICES
import api from 'services/apiGitHub';

// TYPES
import { ReducerAction } from '../types';
import { Types, Request } from './types';

// ACTIONS
import { getUserSuccess, getUserFailure } from './actions';

function* getUser({
  payload,
}: ReducerAction): Generator<StrictEffect, void, string> {
  try {
    const { username } = payload as Request;

    const response = yield call(api.get, `users/${username}`);

    yield put(getUserSuccess(response));
  } catch (err) {
    yield put(getUserFailure(err));
  }
}

export default all([takeLatest(Types.GET_USER, getUser)]);
