import React from 'react';
import ShowOnMount from '../src/components/show-on-mount';
import ModalButtons from './modal-buttons';
import ScreenDims from './screen-dims';
import ScrollPos from './scroll-pos';

export default () => (
  <div className="app">
    <h1>React Utils</h1>

    <ShowOnMount className="fade" delay={500} animInClassName="fadeIn" animOutClassName="fadeOut">
      <p>Sup</p>
    </ShowOnMount>

    <ModalButtons />

    <ScreenDims />

    <ScrollPos />
  </div>
);
