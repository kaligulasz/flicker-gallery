import React, { Component } from 'react';
import Proptypes from 'prop-types';

class ErrorBoundary extends Component {
  static propTypes = {
    children: Proptypes.node.isRequired,
  }

  state = { hasError: false };

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <div className="error">Something went wrong :(</div>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
