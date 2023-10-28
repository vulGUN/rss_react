import React from 'react';
import Search from '@components/Search/Search';
import { IPerson } from '@components/PersonalCard/types';
import StorageService from '@services/StorageService';
import CardsService from '@services/CardsService';
import logoImg from '@assets/img/sw-logo.png';
import './Header.scss';

interface IHeaderState {
  input: string;
}

interface IHeaderProps {
  setPeople: (data: IPerson[]) => void;
  setIsLoad: (value: boolean) => void;
  setIsNetworkError: (value: boolean) => void;
}

const STORAGE_SERVICE = new StorageService();
const CARDS_SERVICE = new CardsService();

export default class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
    this.state = {
      input: STORAGE_SERVICE.getSearchData() || '',
    };
  }

  setIsLoad = (value: boolean) => {
    this.props.setIsLoad(value);
  };

  handleError = () => {
    this.props.setPeople([{ name: { 15: 15 } } as unknown as IPerson]);
  };

  handleSearch = async () => {
    try {
      const { results } = await CARDS_SERVICE.getCards(this.state.input.trim());
      this.props.setPeople([...results]);
      this.props.setIsLoad(false);
    } catch (error) {
      console.error(error);
      this.props.setIsNetworkError(true);
    }
  };

  componentDidMount() {
    this.handleSearch();
    window.onbeforeunload = () => {
      STORAGE_SERVICE.setSearchData(this.state.input);
    };
  }

  render() {
    return (
      <div className="header">
        <img src={logoImg} alt="star wars logo" />
        <div className="search__wrapper">
          <Search
            onSearch={this.handleSearch}
            input={this.state.input}
            setInput={(value) => this.setState({ input: value })}
            setIsLoad={this.setIsLoad}
          />
          <button className="error-button" onClick={this.handleError}>
            Error
          </button>
        </div>
      </div>
    );
  }
}
