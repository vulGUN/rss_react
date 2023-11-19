import React from 'react';
import StorageService from '@/services/StorageService';
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoad, setInput } from '@/store/dataSlice';
import { RootState } from '@/store/Store';
import './Search.scss';

interface SearchProps {
  onSearch: () => void;
}

const STORAGE_SERVICE = new StorageService();

export default function Search({ onSearch }: SearchProps) {
  const { input } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch();
    dispatch(setIsLoad(true));
    STORAGE_SERVICE.setSearchData(input);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        placeholder="enter character name ..."
        type="text"
        value={input}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          dispatch(setInput(event.target.value));
        }}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}
