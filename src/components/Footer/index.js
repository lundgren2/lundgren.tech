import React, { Component } from 'react'
import styled, { css } from 'react-emotion'
import Copyright from './Copyright'

const Wrapper = styled('footer')`
  background: #222;
  width: 100%;
  padding: 120px 2rem;
  color: white;
`
export default class Footer extends Component {
  render () {
    return (
      <Wrapper>
        <Copyright />
      </Wrapper>
    )
  }
}
