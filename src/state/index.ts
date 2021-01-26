import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import user from './user/reducer'

import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: {
    user,
  },
  // middleware: getDefaultMiddleware({
  //   serializableCheck: {
  //     ignoredActions: ['<root>', 'user/updateUsername'],
  //   },
  // }),
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['<root>', 'user/updateUsername'],
      },
    }),
    sagaMiddleware,
  ],
})

sagaMiddleware.run(rootSaga)

export default store
