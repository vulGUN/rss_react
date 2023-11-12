import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonListSection from '@/components/PersonListSection/PersonListSection';
import { IMockDataProvider, contextData } from '@/__test__/PersonListSection.test';
import { DataContext } from '@/contexts/DataProvider';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PersonDetails from '@/components/PersonDetails/PersonDetails';

const MockDataProvider = ({ children, value }: IMockDataProvider) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);

const mockData = {
  ...contextData,
  data: {
    ...contextData.data,
    results: [
      {
        name: 'Test Name',
        gender: 'Test Gender',
        height: 'Test Height',
        mass: 'Test Mass',
        eye_color: 'Test Eye Color',
        hair_color: 'Test Hair Color',
        birth_year: '',
        created: '',
        edited: '',
        films: [],
        homeworld: '',
        skin_color: '',
        species: [],
        starships: [],
        url: '',
        vehicles: [],
      },
    ],
  },
};

test('loader test', () => {
  const newData = {
    ...contextData,
    isLoad: true,
  };

  render(
    <Router>
      <MockDataProvider value={newData}>
        <PersonListSection />
      </MockDataProvider>
    </Router>
  );

  expect(screen.getByText('Loading')).toBeInTheDocument();
});

test('PersonDetails renders correctly', () => {
  render(
    <Router>
      <MockDataProvider value={mockData}>
        <PersonDetails />
      </MockDataProvider>
    </Router>
  );

  expect(screen.getByText('Test Name')).toBeInTheDocument();
  expect(screen.getByText('Test Gender')).toBeInTheDocument();
  expect(screen.getByText('Test Height m')).toBeInTheDocument();
  expect(screen.getByText('Test Mass kg')).toBeInTheDocument();
  expect(screen.getByText('Test Eye Color')).toBeInTheDocument();
  expect(screen.getByText('Test Hair Color')).toBeInTheDocument();
});

test('PersonDetails opens and closes', () => {
  render(
    <MockDataProvider value={mockData}>
      <Router>
        <Routes>
          <Route path="/page/:pageNumber" element={<PersonListSection />} />
          <Route path="/page/:pageNumber/details/:personId" element={<PersonDetails />} />
        </Routes>
      </Router>
    </MockDataProvider>
  );

  fireEvent.click(screen.getByTestId('person-card'));
  expect(screen.getByText('X')).toBeInTheDocument();

  fireEvent.click(screen.getByText('X'));
  expect(mockData.setOpen).toHaveBeenCalledWith(false);
  expect(screen.queryByText('X')).toBeNull();
});
