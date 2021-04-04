import { all } from 'redux-saga/effects';

import gitHub from './gitHub/saga';

export default function* rootSaga(): Generator {
  return yield all([gitHub]);
}
