import React from 'react';
import CardsService from '@services/CardsService';
import StorageService from '@services/StorageService';
import PersonCard from '@components/PersonalCard/PersonCard';
import Search from '@components/Search/Search';
import { IAppState } from 'src/types';

const CARDS_SERVICE = new CardsService();
const STORAGE_SERVICE = new StorageService();

export default class App extends React.Component<object, IAppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      input: STORAGE_SERVICE.getSearchData() || '',
      people: [],
    };
  }

  handleSearch = async () => {
    const { results } = await CARDS_SERVICE.getCards(this.state.input.trim());
    this.setState({ people: [...results] });
  };

  componentDidMount() {
    this.handleSearch();
    window.onbeforeunload = () => {
      STORAGE_SERVICE.setSearchData(this.state.input);
    };
  }

  render() {
    return (
      <>
        <Search
          onSearch={this.handleSearch}
          input={this.state.input}
          setInput={(value) => this.setState({ input: value })}
        />
        <div className="person-cards">
          {this.state.people.length > 0 ? (
            this.state.people.map((item) => <PersonCard key={item.name} person={item} />)
          ) : (
            <div>People not found</div>
          )}
        </div>
      </>
    );
  }
}
