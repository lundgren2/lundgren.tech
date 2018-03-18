import React, { Component } from 'react'
import styled from 'react-emotion'

const Div = styled('div')`
  width: 40px;
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-timing-function: linear;
  transition-duration: 0.15s;
  transition-property: opacity, filter;
  .inner,
  .inner::before,
  .inner::after {
    content: '';
    position: absolute;
    height: 3px;
    width: 100%;
    background: #30047d;
    /* transform-origin: center; */
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
  }
  .inner::before {
    top: -10px;
    transition: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
  }
  .inner {
    transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    transition-duration: 0.22s;
    top: 50%;
    margin-top: -2px;
  }
  .inner::after {
    bottom: -10px;
    transition: bottom 0.1s ease-in 0.25s,
      transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  &.is-active {
    .inner::before {
      top: 0;
      opacity: 0;
    }
    .inner {
      transform: rotate(45deg);
    }
    .inner::after {
      bottom: 0;
      transition: bottom 0.1s ease-out,
        transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;

      transform: rotate(-90deg);
    }
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export default class Hamburger extends Component {
  constructor(props) {
    super(props)
    this.state = { isToggledNav: false }
  }
  render() {
    return (
      <Div
        onClick={this.toggleNav}
        className={this.state.isToggledNav && 'is-active'}
      >
        <div className="inner" />
      </Div>
    )
  }

  toggleNav = () => {
    this.setState(prevState => {
      return { isToggledNav: !prevState.isToggledNav }
    })
  }
}
