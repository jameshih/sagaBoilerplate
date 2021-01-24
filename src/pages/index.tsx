import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const Index: React.FC = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/home/')
  })
  return (
    <>
      <h1>redirecting</h1>
    </>
  )
}

export default Index
