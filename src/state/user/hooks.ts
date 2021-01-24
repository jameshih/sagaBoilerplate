import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../index'
import { updateUsername } from './actions'
import { useLocalStorage } from '@/hooks/utils/useLocalStorage'
import { LocalStorageKeys, DEFAULT_USERNAME } from '@/constants/index'

export const useUsername = (): string => {
  const state = useSelector<AppState, AppState['user']>((state) => state.user)
  return state
}

export const useUpdateUsername = (): ((new_username: string) => void) => {
  const dispatch = useDispatch<AppDispatch>()
  const [username, setUsername] = useLocalStorage<string>(
    LocalStorageKeys.Username,
    DEFAULT_USERNAME
  )
  return useCallback(
    (new_username: string) => {
      setUsername(username)
      dispatch(updateUsername(new_username))
    },
    [dispatch]
  )
}
