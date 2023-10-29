import React from 'react';
import { IPerson } from '@components/PersonalCard/types';
import Header from '@components/Header/Header';
import PersonListSection from '@components/PersonListSection/PersonListSection';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

interface IAppState {
  people: IPerson[];
  isLoad: boolean;
  isNetworkError: boolean;
}

export default class App extends React.Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      people: [],
      isLoad: true,
      isNetworkError: false,
    };
  }

  setIsNetworkError = (value: boolean) => {
    this.setState({ isNetworkError: value });
  };

  setPeople = (data: IPerson[]) => {
    this.setState({ people: data });
  };

  setIsLoad = (value: boolean) => {
    this.setState({ isLoad: value });
  };

  render() {
    return (
      <>
        <Header
          setPeople={this.setPeople}
          setIsLoad={this.setIsLoad}
          setIsNetworkError={this.setIsNetworkError}
        />
        <ErrorBoundary>
          <PersonListSection
            people={this.state.people}
            isLoad={this.state.isLoad}
            isNetworkError={this.state.isNetworkError}
          />
        </ErrorBoundary>
      </>
    );
  }
}
