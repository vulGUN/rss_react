import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Pagination from '@/components/Pagination/Pagination';
import { IMockDataProvider, contextData } from '@/__test__/PersonListSection.test';
import { DataContext } from '@/contexts/DataProvider';

const MockDataProvider = ({ children, value }: IMockDataProvider) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);

const mockData = {
  ...contextData,
  data: {
    ...contextData.data,
    previous: 'prev-url',
    next: 'next-url',
    count: 100,
  },
  page: 2,
};

test('Check prev and next', async () => {
  render(
    <MockDataProvider value={mockData}>
      <MemoryRouter initialEntries={[`/page/${mockData.page}`]}>
        <Routes>
          <Route path="/page/:pageNumber" element={<Pagination />} />
        </Routes>
      </MemoryRouter>
    </MockDataProvider>
  );

  fireEvent.click(screen.getByText('→'));
  // await waitFor(() => expect(mockData.setPage).toHaveBeenCalledWith(mockData.page + 1));
  expect(window.location.pathname).toBe('/page/1');

  fireEvent.click(screen.getByText('←'));
  // await waitFor(() => expect(mockData.setPage).toHaveBeenCalledWith(mockData.page - 1));
  expect(window.location.pathname).toBe('/page/1');
});
