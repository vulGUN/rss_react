import React from 'react';
import { SearchProps } from 'src/types';
import './Search.scss';

export default class Search extends React.Component<SearchProps> {
  constructor(props: SearchProps) {
    super(props);
  }

  handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    this.props.onSearch();
    this.props.setIsLoad(true);
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          className="search__input"
          placeholder="enter character name ..."
          type="text"
          value={this.props.input}
          onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
            this.props.setInput(event.target.value);
          }}
        />
        <button className="search__button" type="submit">
          Search
        </button>
      </form>
    );
  }
}
