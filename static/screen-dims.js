import React from 'react';
import useScreen from '../src/hooks/use-screen';

const ScreenDims = () => {
  const { w, h } = useScreen();

  return (
    <div>
      <p>Screen width: {w}</p>
      <p>Screen height: {h}</p>
    </div>
  );
};

export default ScreenDims;
