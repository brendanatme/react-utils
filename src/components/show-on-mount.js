/**
 * show-on-mount
 *
 * show a component after it has mounted via css classes
 */
import React from 'react';

export default class ShowOnMount extends React.Component {
  state = { show: false };

  /**
   * required to wrap a next.js page
   */
  static async getInitialProps(ctx) {
    const pageProps = Composed.getInitialProps
      ? await Composed.getInitialProps(ctx)
      : {};

    return pageProps;
  }

  componentDidMount() {
    const delay = this.props.delay || 500;

    if (typeof window !== 'undefined') {
      window.setTimeout(() => {
        this.setState({ show: true });
      }, delay);
    }
  }

  render() {
    const {
      animInClassName,
      animOutClassName,
      className = '',
    } = this.props;

    return (
      <div className={`${className} ${this.state.show ? animInClassName : animOutClassName}`}>
        {this.props.children}
      </div>
    );
  }
};
