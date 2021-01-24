import { createReducer } from '@reduxjs/toolkit'

import { updateUsername } from './actions'
import { DEFAULT_USERNAME } from '@/constants/index'

export const initialState = DEFAULT_USERNAME

export default createReducer(initialState, (builder) =>
  builder.addCase(updateUsername, (state, { payload: user }) => {
    return user
  })
)
