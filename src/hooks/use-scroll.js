/**
 * hooks/use-scroll
 */
import { useState, useLayoutEffect } from 'react';
import debounce from 'lodash.debounce';
import { isBrowser } from '../helpers';

const useScroll = (delay = 0) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  if (!isBrowser()) return pos;

  const getAndSetPos = () => setPos({
    x: window.pageXOffset,
    y: window.pageYOffset,
  });

  const handleScroll = delay ? debounce(getAndSetPos, delay) : getAndSetPos;

  useLayoutEffect(() => {
    getAndSetPos();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return pos;
};

export default useScroll;
