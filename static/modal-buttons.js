import React from 'react';
import { withOverlay } from '../src/hocs/with-overlay';

const ModalButtons = ({
  overlay,
}) => (
  <div>
    <button onClick={overlay.show}>
      Open Modal
    </button>

    <button onClick={overlay.hide}>
      Close Modal
    </button>

    {overlay.isShowing && (
      <p>This should be an overlay</p>
    )}
  </div>
);

export default withOverlay(ModalButtons);
