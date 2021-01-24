import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'
import tw from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat, faKiwiBird } from '@fortawesome/free-solid-svg-icons'

const Container = styled.div.attrs({
  className: `bg-red-400 p-4 flex justify-evenly`,
})``

interface NavItemProps {
  active: boolean
}

const NavItem = styled.div<NavItemProps>`
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;
`

const Nav: React.FC = () => {
  const location = useRouter()

  return (
    <Container>
      <Link href="/home">
        <NavItem active={location.pathname === '/home' ? true : false}>
          <FontAwesomeIcon icon={faDog} />
          <span>Home</span>
        </NavItem>
      </Link>
      <Link href="/about">
        <NavItem active={location.pathname === '/about' ? true : false}>
          <FontAwesomeIcon icon={faCat} />
          <span> About</span>
        </NavItem>
      </Link>
      <Link href="/contact">
        <NavItem active={location.pathname === '/contact' ? true : false}>
          <FontAwesomeIcon icon={faKiwiBird} />
          <span> Contact</span>
        </NavItem>
      </Link>
    </Container>
  )
}

export default Nav
