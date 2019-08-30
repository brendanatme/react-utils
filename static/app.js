import React from 'react';
import ShowOnMount from '../src/components/show-on-mount';
import Text from './text';
import ModalButtons from './modal-buttons';

export default () => (
  <div className="app">
    React Utils

    <ShowOnMount className="fade" delay={500} animInClassName="fadeIn" animOutClassName="fadeOut">
      <Text text="Suuuuuup" />
    </ShowOnMount>

    <ModalButtons />
  </div>
);
