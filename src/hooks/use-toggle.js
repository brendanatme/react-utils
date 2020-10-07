/**
 * hooks/use-toggle
 *
 * provide a re-usable state toggle
 * useful for managing modals
 * or any or component that requires a togglable boolean state
 * 
 * usage:
 * 
 * const modal = useToggle();
 * 
 * return (
 *  <>
 *    <button onClick={modal.activate}>Show Modal</button>
 *    <button onClick={modal.deactivate}>Hide Modal</button>
 *    <MyModal isShowing={modal.isActive} />
 *  </>
 * );
 */
import { useState } from 'react';

export default (activateByDefault = false) => {
  const [isActive, setIsActive] = useState(activateByDefault);
  const deactivate = () => setIsActive(false);
  const activate = () => setIsActive(true);

  return {
    activate,
    deactivate,
    isActive,
  };
};
