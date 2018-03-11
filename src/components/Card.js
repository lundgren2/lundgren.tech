import React from 'react'
import styled, { css } from 'react-emotion'

const Title = styled('h2')`
  display: flex;
  position: absolute;
  width: 100%;
  height: 100%;
  transition: all .5 ease-in-out;
  background-color: rgba(0,0,0,0.5); // overlay
  &:hover {
    background-color: rgba(111,111,111,0.5);
  }
  z-index: 99;
  font-size: 2.5rem;
  color: ${props => props.black ? 'black' : 'white'};
  justify-content: center;
  align-items: center;
`
const ImgBg = styled('div')`
  position: relative;
  display: flex;
  min-height: 250px;
  background: url('${props => props.img}') no-repeat;
  background-size: cover;
  transition: all 400ms ease-in;
  &:offhover {
    transform: scale(1.05);
  }
`

const Card = props => {
  return (
    <ImgBg img={props.img}>
      <Title>{props.text}</Title>
    </ImgBg>
  )
}

export default Card
