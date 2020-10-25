import React from 'react';
import useScroll from '../src/hooks/use-scroll';

const ScrollPos = () => {
  const { x, y } = useScroll();

  return (
    <div>
      <p>X Pos: {x}</p>
      <p>Y Pos: {y}</p>
    </div>
  );
};

export default ScrollPos;
