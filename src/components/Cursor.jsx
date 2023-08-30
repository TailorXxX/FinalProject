/* eslint-disable no-unused-vars */
import React from 'react';
import AnimatedCursor from 'react-animated-cursor';

function Cursor() {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={12}
      color="185, 255, 249"
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
    />
  );
}

export default Cursor;
