import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import bg from '../images/bg.jpg'

const Button = styled(Link)`
  position: relative;
  flex: none;
  appearance: none;
  user-select: none;
  outline: none;
  align-items: center;
  white-space: nowrap;
  justify-content: center;
  text-decoration: none;
  border-radius: 5px;
  color: black;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
  height: 3.4em;
  min-width: 3em;
  padding: 0 2em;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.1);
  }
  &:active,
  &.active {
    box-shadow: inset 0 0 999em rgba(0, 0, 0, 0.2);
  }
  &:after {
    display: none;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border-radius: inherit;
    background-color: rgba(255, 255, 255, 0.35);
  }
  &[disabled] {
    pointer-events: none;
    &:after {
      display: block;
    }
  }
  &:not(button):not(select):not(input) {
    display: inline-grid;
    grid-gap: 0.68em;
    grid-auto-flow: column;
    align-content: center;

    ${props =>
      props.outline
        ? 'background: none; border: 2px solid white; color: white; &:hover { background-color: rgba(255,255,255,1); color: black; }'
        : 'background-color: rgba(255, 255, 255, 1);'};
  }
`

const Slider = () => {
  return (
    <div
      css={`
        background-image: url(${bg});
        background-size: cover;
        background-position-x: left;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        color: white;
      `}
    >
      <div
        css={`
          margin-left: 10%;
        `}
      >
        <h1
          css={`
            margin-bottom: 2rem;
          `}
        >
          Welcome to the future!
        </h1>
        <Button outline to="/emotion">
          Contact
        </Button>{' '}
        <Button to="/emotion">Click me!</Button>
      </div>
    </div>
  )
}

export default Slider
