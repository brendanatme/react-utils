import React from 'react';
import useToggle from '../src/hooks/use-toggle';

const ModalButtons = () => {
  const modal = useToggle();

  return (
    <div>
      <button onClick={modal.activate}>
        Open Modal
      </button>

      <button onClick={modal.deactivate}>
        Close Modal
      </button>

      {modal.isActive ? (
        <p>This should be an overlay</p>
      ) : ''}
    </div>
  );
};

export default ModalButtons;
