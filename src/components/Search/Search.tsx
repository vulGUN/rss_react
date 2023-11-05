import React from 'react';
import './Search.scss';

interface SearchProps {
  input: string;
  onSearch: () => void;
  setInput: (value: string) => void;
  setIsLoad: (value: boolean) => void;
}

export default function Search({ input, onSearch, setInput, setIsLoad }: SearchProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onSearch();
    setIsLoad(true);
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        placeholder="enter character name ..."
        type="text"
        value={input}
        onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
          setInput(event.target.value);
        }}
      />
      <button className="search__button" type="submit">
        Search
      </button>
    </form>
  );
}
