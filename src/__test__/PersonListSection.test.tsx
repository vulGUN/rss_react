import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { DataContextType, DataContext } from '@/contexts/DataProvider';
import PersonListSection from '@/components/PersonListSection/PersonListSection';
import '@testing-library/jest-dom';

export interface IMockDataProvider {
  children: React.ReactNode;
  value: DataContextType;
}

const MockDataProvider = ({ children, value }: IMockDataProvider) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);

export const contextData: DataContextType = {
  data: {
    count: 0,
    next: null,
    previous: null,
    results: Array(10).fill({ name: 'Test Person' }),
  },
  setData: jest.fn(),
  isLoad: false,
  setIsLoad: jest.fn(),
  page: 1,
  setPage: jest.fn(),
  isNetworkError: false,
  setIsNetworkError: jest.fn(),
  open: false,
  setOpen: jest.fn(),
  input: '',
  setInput: jest.fn(),
};

describe('Tests for the Card List component', () => {
  test('renders 10 PersonCard components', () => {
    render(
      <Router>
        <MockDataProvider value={contextData}>
          <PersonListSection />
        </MockDataProvider>
      </Router>
    );

    expect(screen.getAllByTestId('person-card')).toHaveLength(10);
  });

  test('check message', () => {
    const newContextData = {
      ...contextData,
      data: {
        ...contextData.data,
        results: [],
      },
    };
    render(
      <Router>
        <MockDataProvider value={newContextData}>
          <PersonListSection />
        </MockDataProvider>
      </Router>
    );

    expect(screen.getByText('Sorry, nothing found. Try again')).toBeInTheDocument();
  });
});
