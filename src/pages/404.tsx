import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import Link from 'next/link'

const PageNotFound: React.FC = () => {
  const router = useRouter()
  useEffect(() => {
    setTimeout(() => {
      router.push('/home')
    }, 1500)
  })
  return (
    <>
      <h1>404</h1>
      <h2>returning to home</h2>
    </>
  )
}

export default PageNotFound
