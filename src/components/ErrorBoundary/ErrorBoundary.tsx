import React from 'react';
import { IErrorBoundaryProps, IErrorBoundaryState } from 'src/types';
import './ErrorBoundary.scss';

export default class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error__boundary">
          🚫 Something went wrong, please restart the application
        </div>
      );
    }

    return this.props.children;
  }
}
