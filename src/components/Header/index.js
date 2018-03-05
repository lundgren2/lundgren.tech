import React from 'react'
import Link from 'gatsby-link'
import styled, { css } from 'react-emotion'
import typography from '../../utils/typography'

const Navbar = styled('nav')`
  background: hotpink;
  height: 75px;
  display: flex;
  align-items: center;
`
const NavItem = styled(Link)`
  text-decoration: none;
  padding: 0 20px;
  &.${(props) => props.activeClassName} {
    color: paleturquoise;
    text-decoration: underline;
  }
`

// NavItem.defaultProps = {
//   activeClassName: 'active'
// }

const Header = () => (
  <div
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem'
    }}
  >

    <Navbar>
      <NavItem to="/">Home</NavItem>
      <NavItem to="/page-2">About</NavItem>
    </Navbar>
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem'
      }}
    >

      <h1 style={{ margin: 0 }}>

        <Link>
          Gatsby
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
