import React from 'react';
import type { ErrorBoundaryState } from '../types/common';

function withErrorBoundary<P>(Component: React.ComponentType<P>) {
  return class ErrorBoundary extends React.Component<P, ErrorBoundaryState> {
    constructor(props: P) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error) {
      return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      console.error("Error caught by ErrorBoundary:", error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return (<><h1 className='text-red-700 text-center'>Something went wrong. Please Try Again Later.</h1>
        <p className='text-red-500 text-center'>{this.state.error?.toString()}</p></>);
      }
      return <Component {...this.props} />;
    }
  };
}

export default withErrorBoundary;