import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  static getDerivedStateFromError(err) {
    return {
      hasError: true,
    };
  }
  componentDidCatch(err, info) {
    console.log(err);
    console.log(info);
  }
  render() {
    if (this.state.hasError) {
      return <h1>testing ErrorBoundary</h1>;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
