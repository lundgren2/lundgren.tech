import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import typography from '../../utils/typography'
import logo from '../../images/logo.svg'
import Hamburger from './Hamburger'
import './style.styl'

const Container = styled('header')`
  height: 75px;
  padding: 0 1em;
  display: flex;
  align-items: center;
  box-shadow: 0 1px 0 #dbdbdb;
  position: relative;
  justify-content: space-between;
  img {
    max-height: 55px;
    margin-top: 25px;
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
  &.${props => props.activeClassName} {
    color: paleturquoise;
    text-decoration: underline;
  }
`

// NavItem.defaultProps = {
//   activeClassName: 'active'
// }

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggledNav: false }
  }

  render() {
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar className="navbar">
          <NavItem className="nav-item" to="/">
            Home
          </NavItem>
          <NavItem className="nav-item" to="/about">
            About
          </NavItem>
        </Navbar>
        <Hamburger
          toggleNav={this.toggleNav}
          isToggledNav={this.state.isToggledNav}
        />
      </Container>
    )
  }

  toggleNav = () => {
    this.setState(prevState => {
      return { isToggledNav: !prevState.isToggledNav }
    })
  }
}
