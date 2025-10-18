"use client";
import React from "react";
import ErrorMessage from "./components/ui/ErrorMessage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: true }
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo })
  }
  render() {
    if (this.state.hasError) {
      return (
        <div>
          <ErrorMessage error={error} theme={theme} />
          <button
            type="button"
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      )
    }
 
    return this.props.children;
  }
}
 
export default ErrorBoundary;