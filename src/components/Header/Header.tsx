import { useEffect } from 'react';
import Search from '@components/Search/Search';
import CardsService from '@services/CardsService';
import logoImg from '@assets/img/sw-logo.png';
import { useData } from 'src/contexts/DataProviders';
import './Header.scss';
import { IPerson } from '@components/PersonalCard/types';

const CARDS_SERVICE = new CardsService();

export default function Header() {
  const { setPage, setData, setIsLoad, setIsNetworkError, input, setInput } = useData();

  const handleError = () => {
    setData((prevState) => ({
      ...prevState,
      results: [{ name: { 15: 15 } } as unknown as IPerson],
    }));
  };

  const handleSearch = async () => {
    try {
      setPage(1);
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
