import { useState } from 'react';
import { IPerson } from '@components/PersonalCard/types';
import Header from '@components/Header/Header';
import PersonListSection from '@components/PersonListSection/PersonListSection';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

export default function App() {
  const [people, setPeople] = useState<IPerson[]>([]);
  const [isLoad, setIsLoad] = useState(true);
  const [isNetworkError, setIsNetworkError] = useState(false);

  return (
    <>
      <Header
        setPeople={(data) => setPeople(data)}
        setIsLoad={(value) => setIsLoad(value)}
        setIsNetworkError={(value) => setIsNetworkError(value)}
      />
      <ErrorBoundary>
        <PersonListSection people={people} isLoad={isLoad} isNetworkError={isNetworkError} />
      </ErrorBoundary>
    </>
  );
}
