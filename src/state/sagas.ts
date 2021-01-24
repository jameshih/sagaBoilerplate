import { all } from 'redux-saga/effects'
import { saga as userSaga } from './user/saga'

export default function* rootSaga() {
  yield all([userSaga()])
}
