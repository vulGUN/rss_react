/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PersonCard from '@/components/PersonCard/PersonCard';
import { IPerson } from '@/components/PersonCard/types';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import PersonListSection from '@/components/PersonListSection/PersonListSection';
import PersonDetails from '@/components/PersonDetails/PersonDetails';
import { DataContext } from '@/contexts/DataProvider';
import { IMockDataProvider, contextData } from '@/__test__/PersonListSection.test';

const data: IPerson = {
  name: 'person',
  birth_year: '2000',
  created: '2023-01-01',
  edited: '2023-01-01',
  eye_color: 'blue',
  films: [],
  gender: 'male',
  hair_color: 'black',
  height: '180',
  homeworld: 'Earth',
  mass: '70',
  skin_color: 'white',
  species: [],
  starships: [],
  url: 'https://example.com',
  vehicles: [],
};

const MockDataProvider = ({ children, value }: IMockDataProvider) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);

describe('testing card', () => {
  test('renders cards data', () => {
    render(<PersonCard {...data} />);

    expect(screen.getByText(data.name)).toBeInTheDocument();
  });

  test('navigates to PersonDetails on PersonCard click', () => {
    const { getByText } = render(
      <MemoryRouter initialEntries={['/page/1']}>
        <MockDataProvider value={contextData}>
          <Routes>
            <Route path="/page/:pageNumber" element={<PersonListSection />}>
              <Route path="/page/:pageNumber/details/:personId" element={<PersonDetails />} />
            </Route>
          </Routes>
        </MockDataProvider>
      </MemoryRouter>
    );
    const element = screen.getAllByTestId('person-card')[0];
    fireEvent.click(element);

    expect(getByText('Gender:')).toBeInTheDocument();
  });
});
