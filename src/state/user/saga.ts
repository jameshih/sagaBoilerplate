import { takeLatest, select } from 'redux-saga/effects'
import { updateUsername } from './actions'
// import { SUCCESS, FAILED, ERROR } from './constant';

function* testFunc() {
  const username = yield select((state) => state.user)
  yield console.log('[userSaga] username: ', username)
}

export function* saga() {
  yield takeLatest(updateUsername, testFunc)
}
