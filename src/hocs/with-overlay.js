/**
 * with-overlay
 * 
 * provide a component with props
 * for showing and hiding an overlay component
 */
import React from 'react';

export const withOverlay = (Composed) => class WithOverlay extends React.Component {
  state = { isShowing: false };

  /**
   * required to wrap a next.js page
   */
  static async getInitialProps(ctx) {
    const pageProps = Composed.getInitialProps
      ? await Composed.getInitialProps(ctx)
      : {};

    return pageProps;
  }

  hide = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }

    this.setState({ isShowing: false });
  };

  show = (e) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    
    this.setState({ isShowing: true });
  };

  render() {
    const overlay = {
      hide: this.hide,
      isShowing: this.state.isShowing,
      show: this.show,
    };

    return (
      <Composed {...this.props} overlay={overlay} />
    );
  }
}
