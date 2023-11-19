import { useEffect } from 'react';
import Search from '@/components/Search/Search';
import CardsService from '@/services/CardsService';
import logoImg from '@/assets/img/sw-logo.png';
import { IPerson } from '@/components/PersonCard/types';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setPage, setIsLoad, setIsNetworkError } from '@/store/dataSlice';
import { RootState } from '@/store/Store';
import './Header.scss';

const CARDS_SERVICE = new CardsService();

export default function Header() {
  const dispatch = useDispatch();
  const { input } = useSelector((state: RootState) => state.data);

  const handleError = () => {
    dispatch(
      setData({
        count: 0,
        next: null,
        previous: null,
        results: [{ name: { 15: 15 } } as unknown as IPerson],
      })
    );
  };

  const handleSearch = async () => {
    try {
      dispatch(setPage(1));
      const data = await CARDS_SERVICE.getCards(input.trim());
      dispatch(setData(data));
      dispatch(setIsLoad(false));
    } catch (error) {
      console.error(error);
      dispatch(setIsNetworkError(true));
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <div className="header">
      <img src={logoImg} alt="star wars logo" />
      <div className="search__wrapper">
        <Search onSearch={handleSearch} />
        <button className="error-button" onClick={handleError}>
          Error
        </button>
      </div>
    </div>
  );
}
