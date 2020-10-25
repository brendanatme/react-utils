/**
 * hocs/with-click-away
 * 
 * when a user clicks outside of this DOM element,
 * run the provided callback, passing it the component's props
 * 
 * usage:
 * 
 * import WithClickAway from '@brendanatme/react-utils/hocs/with-click-away';
 * 
 * const MyComponent = (props) => (
 *   <div>...</div>
 * );
 * 
 * export default WithClickAway((props) => props.close())(MyComponent);
 */
import React, { useEffect, useRef } from 'react';

const MOUSE_DOWN = 'mousedown';

const ClickAwayDecorator = (cb) => (Composed) => function WithClickAway(props) {
  const ref = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const onClickAway = (e) => ref.current && !ref.current.contains(e.target) && cb(props);
    document.addEventListener(MOUSE_DOWN, onClickAway, false);
    return () => document.removeEventListener(MOUSE_DOWN, onClickAway, false);
  }, [ref]);

  return (
    <span className="with-click-away" ref={ref}>
      <Composed {...props} />
    </span>
  );
};

export default ClickAwayDecorator;
