import store from '@/state/index'

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
