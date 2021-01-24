import React from 'react'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import styled from 'styled-components'

interface PageProps {
  children: any
}

const Container = styled.div.attrs({
  className: `flex flex-col justify-center items-center h-screen bg-red-100`,
})``

const Layout: React.FC<PageProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default Layout
