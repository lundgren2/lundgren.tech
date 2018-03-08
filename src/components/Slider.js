import React from 'react'
import Link from 'gatsby-link'
import styled from 'react-emotion'
import bg from '../../public/static/images/bg.jpg'

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
/*color: inherit;*/
color: black;
cursor: pointer;
background-color: rgba(255, 255, 255, 0.93);
height: 2.5em;
min-width: 2.5em;
padding: 0 0.68em;
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
}
`

const Slider = () => {
  return (
    <div css={`
      background-image: url(${bg});
      background-size: cover;
      background-position-x: left;
      width: 100%;
      height: 100vh;
      display: flex;
      align-items: center;
      color: white;
    `}>
      <div css={`margin-left: 10%;`}>
        <h1 css={`margin-bottom: 2rem;`}>Welcome to the future!</h1>
        <Button to="/emotion">Contact</Button>{' '}
        <Button to="/emotion">Click me!</Button>
      </div>
    </div>
  )
}

export default Slider
