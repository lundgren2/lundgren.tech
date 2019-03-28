import React from 'react';
import { keyframes } from '@emotion/core';

export default ({ items, color }) => (
  <div
    css={{
      display: `flex`,
      textIndent: `8px`,
      paddingBottom: `12px`,

      '& span': {
        animation: `${topToBottom} 12s linear infinite 0s`,
        opacity: 0,
        position: `absolute`,

        ':nth-child(2)': {
          animationDelay: `3s`,
        },

        ':nth-child(3)': {
          animationDelay: `6s`,
        },

        ':nth-child(4)': {
          animationDelay: `9s`,
        },
      },
    }}
  >
    {items &&
      items.map(item => (
        <span key={item} css={{ color }}>
          {item}
        </span>
      ))}
  </div>
);

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
