import React from 'react';
import { keyframes } from '@emotion/core';

const topToBottom = keyframes({
  '0%': {
    opacity: 0,
  },
  '6%': {
    opacity: 1,
    // transform: `translateY(-30px)`,
  },
  '10%': {
    opacity: 1,
    transform: `translateY(0px)`,
  },
  '25%': {
    opacity: 1,
    transform: `translateY(0px)`,
  },
  '29%': {
    opacity: 0,
    // transform: `translateY(30px)`,
  },
  '80%': {
    opacity: 0,
  },
  '100%': {
    opacity: 0,
  },
});

const style = {
  animation: `${topToBottom} 12s linear infinite 0s`,
  opacity: 0,
  position: `absolute`,
  display: 'inline-block',
  ':nth-child(2)': {
    animationDelay: `3s`,
  },
  ':nth-child(3)': {
    animationDelay: `6s`,
  },

  ':nth-child(4)': {
    animationDelay: `9s`,
  },
};
export default ({ items, color }) => (
  <>
    {items &&
      items.map(item => (
        <span key={item} css={{ ...style, color }}>
          {item}.
        </span>
      ))}
  </>
);
