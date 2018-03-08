import React from 'react'
import { css } from 'react-emotion'

const Card = props => {
  const text = props.text
  const img = props.img

  return (
    <div className={css`
      position: relative;
      display: flex;
      background: url('${img}') no-repeat;
      background-size: cover;
      transition: all 400ms ease-in;
      &:hover {
        transform: scale(1.1);
      }
    `}>
      <h2 className={css`
        position: absolute;
        z-index: 99;
        font-size: 2rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
      `}>{text}</h2>

    </div>
  )
}

export default Card
