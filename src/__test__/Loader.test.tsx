import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonListSection from '@/components/PersonListSection/PersonListSection';
import { IMockDataProvider, contextData } from '@/__test__/PersonListSection.test';
import { DataContext } from '@/contexts/DataProvider';
import { BrowserRouter as Router } from 'react-router-dom';

const MockDataProvider = ({ children, value }: IMockDataProvider) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);

const newData = {
  ...contextData,
  isLoad: true,
};

test('loader test', () => {
  render(
    <Router>
      <MockDataProvider value={newData}>
        <PersonListSection />
      </MockDataProvider>
    </Router>
  );

  expect(screen.getByText('Loading')).toBeInTheDocument();
});
