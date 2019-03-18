import React from 'react'
import Link from 'gatsby-link'
import styled from '@emotion/styled'
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
    max-height: 48px;
    margin-top: 28px;
  }
`

const Navbar = styled('nav')`
  display: block;
  @media (max-width: 768px) {
    transition: all 200ms;
    max-height: 0;
    height: 100vh;
    display: flex;
    position: absolute;
    background: white;
    max-height: 100vh;
    width: 100%;
    z-index: 2;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
  constructor (props) {
    super(props)
    this.state = { isToggledNav: false }
  }

  render () {
    return (
      <Container>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <Navbar
          className={
            this.state.isToggledNav ? 'mobilenav-open navbar' : 'navbar'
          }
        >
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
