import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

const JumboCursor = ({ color }) => {
  const outerCursors = [
    {
      color: color,
      outerAlpha: 1,
      outerSize: 25,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 1,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    },
    {
      color: color,
      outerAlpha: 1,
      outerSize: 22,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 2,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    },
    {
      color: color,
      outerAlpha: 1,
      outerSize: 19,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 3,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    },
    {
      color: color,
      outerAlpha: 1,
      outerSize: 16,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 4,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    },
    {
      color: color,
      outerAlpha: 1,
      outerSize: 13,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 5,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    },
    {
      color: color,
      outerAlpha: 1,
      outerSize: 10,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 6,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    },
    {
      color: color,
      outerAlpha: 1,
      outerSize: 7,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 7,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    },
    {
      color: color,
      outerAlpha: 1,
      outerSize: 4,
      innerScale: 1,
      outerScale: 1,
      innerSize: 25,
      showSystemCursor: false,
      trailingSpeed: 8,
      clickables: ['a', 'input[type="text"]', 'input[type="email"]', 'input[type="number"]', 'input[type="submit"]', 'input[type="image"]', 'label[for]', 'select', 'textarea', 'button', '.link'],
    }
  ];

  return (
    <>
      {outerCursors.map((cursorProps, index) => (
        <AnimatedCursor key={index} {...cursorProps} />
      ))}
    </>
  );
};

export default JumboCursor;


