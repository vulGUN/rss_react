import React from 'react';
import { IErrorBoundaryProps, IErrorBoundaryState } from 'src/types';

export default class ErrorBoundary extends React.Component<
  IErrorBoundaryProps,
  IErrorBoundaryState
> {
  constructor(props: IErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    console.error(error);
    console.log('work');
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <div>Something went wrong, try again</div>;
    }

    return this.props.children;
  }
}
