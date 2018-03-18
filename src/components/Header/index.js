import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import typography from '../../utils/typography'
import logo from '../../images/logo.svg'
import Hamburger from './Hamburger'
const Container = styled('header')`
  height: 75px;
  padding: 0 1em;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 #DBDBDB;
  position: relative;
  justify-content: space-between;
  img {
    max-height: 48px;
    margin-top: 28px;
  }
`

const Navbar = styled('nav')`
  display: none;
  @media (min-width: 768px) {
    display: block;
  }
`
const NavItem = styled(Link)`
  text-decoration: none;
  padding: 0 20px;
  color: #30047d;
  font-size: 1.1em;
  text-transform: uppercase;
  &.${(props) => props.activeClassName} {
    color: paleturquoise;
    text-decoration: underline;
  }
`

// NavItem.defaultProps = {
//   activeClassName: 'active'
// }

const Header = () => (
  <Container>
    <Link to="/"><img src={logo} alt="Logo" /></Link>
    <Navbar>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/page-2">About</NavItem>
    </Navbar>
    <Hamburger />
  </Container>
)

export default Header
