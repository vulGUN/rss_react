import { useState } from 'react';
import Header from '@components/Header/Header';
import PersonListSection from '@components/PersonListSection/PersonListSection';
import ErrorBoundary from '@components/ErrorBoundary/ErrorBoundary';

export default function App() {
  const [isNetworkError, setIsNetworkError] = useState(false);

  return (
    <>
      <Header setIsNetworkError={(value) => setIsNetworkError(value)} />
      <ErrorBoundary>
        <PersonListSection isNetworkError={isNetworkError} />
      </ErrorBoundary>
    </>
  );
}
