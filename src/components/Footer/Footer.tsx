import React from 'react'
import styled from 'styled-components'

const Container = styled.div.attrs({
  className: `text-center`,
})``

const Footer: React.FC = () => {
  return (
    <Container>
      <h1>footer</h1>
    </Container>
  )
}

export default Footer
