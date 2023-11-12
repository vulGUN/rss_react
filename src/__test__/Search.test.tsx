import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from '@/components/Search/Search';
import { DataProvider } from '@/contexts/DataProvider';
import StorageService from '@/services/StorageService';

const searchProps = {
  input: 'test',
  onSearch: jest.fn(),
  setInput: jest.fn(),
  setIsLoad: jest.fn(),
};

describe('testing local storage', () => {
  test('save value to local storage', () => {
    render(<Search {...searchProps} />);
    Storage.prototype.setItem = jest.fn();
    fireEvent.click(screen.getByText('Search'));
    expect(localStorage.setItem).toHaveBeenCalled();
  });
  test('retrieves value from local storage', () => {
    StorageService.prototype.getSearchData = jest.fn(() => 'search data');
    render(
      <DataProvider>
        <div>Test</div>
      </DataProvider>
    );
    expect(StorageService.prototype.getSearchData).toHaveBeenCalled();
  });
});
