import { Component } from "react";
import FallbackBackground from "./FallbackBackground";

export default class CanvasErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) return <FallbackBackground />;
    return this.props.children;
  }
}
