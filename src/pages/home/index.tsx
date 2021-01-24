import React, { useEffect } from 'react'
import { useLocalStorage } from '@/hooks/utils/useLocalStorage'
import { useInput } from '@/hooks/utils/useInputs'
import { useUpdateUsername, useUsername } from '@/state/user/hooks'
import { LocalStorageKeys, DEFAULT_USERNAME } from '@/constants/index'

const Home: React.FC = () => {
  const username = useUsername()
  const setUsername = useUpdateUsername()
  const [stored, setStored] = useLocalStorage<string>(
    LocalStorageKeys.Username,
    DEFAULT_USERNAME
  )
  const { value, bind, reset } = useInput('')

  const handleUsername = (s: string) => {
    setStored(s)
    setUsername(s)
  }

  useEffect(() => {
    setUsername(stored)
  }, [])

  const handleSubmit = (evt: React.FormEvent) => {
    evt.preventDefault()
    handleUsername(value)
    reset()
  }

  return (
    <>
      <p>Welcome: {username}</p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" {...bind} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </>
  )
}

export default Home
