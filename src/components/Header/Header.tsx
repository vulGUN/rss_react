import { useEffect, useState } from 'react';
import Search from '@components/Search/Search';
import StorageService from '@services/StorageService';
import CardsService from '@services/CardsService';
import logoImg from '@assets/img/sw-logo.png';
import { useData } from 'src/contexts/DataProviders';
import './Header.scss';

interface IHeaderProps {
  setIsNetworkError: (value: boolean) => void;
}

const STORAGE_SERVICE = new StorageService();
const CARDS_SERVICE = new CardsService();

export default function Header({ setIsNetworkError }: IHeaderProps) {
  const [input, setInput] = useState(STORAGE_SERVICE.getSearchData() || '');

  const handleError = () => {
    // setPeople({ results: [{ name: { 15: 15 } } as unknown as IPerson] });
    console.log('ok');
  };

  const { setData, setIsLoad } = useData();

  const handleSearch = async () => {
    try {
      const data = await CARDS_SERVICE.getCards(input.trim());
      setData(data);
      setIsLoad(false);
    } catch (error) {
      console.error(error);
      setIsNetworkError(true);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  useEffect(() => {
    window.onbeforeunload = () => {
      STORAGE_SERVICE.setSearchData(input);
    };
  }, [input]);

  return (
    <div className="header">
      <img src={logoImg} alt="star wars logo" />
      <div className="search__wrapper">
        <Search
          onSearch={handleSearch}
          input={input}
          setInput={(value) => setInput(value)}
          setIsLoad={(value) => setIsLoad(value)}
        />
        <button className="error-button" onClick={handleError}>
          Error
        </button>
      </div>
    </div>
  );
}
