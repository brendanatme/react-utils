/**
 * hooks/use-screen
 *
 * provide access to screen dimensions
 * in a performant and concise manner
 * 
 * useful for programmatic styles, animations, etc.
 * 
 * usage:
 * 
 * const { w, h } = useScreen();
 * 
 * return (
 *  <>
 *    <p>Screen width: {w}</p>
 *    <p>Screen height: {h}</p>
 *  </>
 * );
 */
import { useEffect, useState } from 'react';
import debounce from 'lodash.debounce';

const useScreen = (delay = 333) => {
  const [dims, setDims] = useState({ h: 0, w: 0 });

  if (typeof window === 'undefined') {
    return dims;
  };

  const getAndSetDims = () => {
    const { clientWidth, clientHeight } = document.documentElement;
    setDims({ h: clientHeight, w: clientWidth });
  };

  const handleResize = debounce(getAndSetDims, delay);

  useEffect(() => {
    getAndSetDims();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return dims;
};

export default useScreen;
