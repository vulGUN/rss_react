import CardsService from '@services/CardsService';
import { useData } from 'src/contexts/DataProviders';
import { useNavigate, useParams } from 'react-router-dom';
import './Pagination.scss';
import { useEffect } from 'react';

const CARDS_SERVICE = new CardsService();

export default function Pagination() {
  const { data, setData, setIsLoad, page, setPage, setIsNetworkError } = useData();
  const navigate = useNavigate();
  const { pageNumber } = useParams();
  console.log(pageNumber);

  const prevPageFn = async () => {
    if (page > 1 && data.previous) {
      setIsLoad(true);
      try {
        const newData = await CARDS_SERVICE.getNextOrPrevCards(data.previous);
        setData(newData);
        setPage((prevState) => prevState - 1);
      } catch (error) {
        setIsNetworkError(true);
      }
      setIsLoad(false);
    }
  };

  const nextPageFn = async () => {
    if (page < Math.ceil(data.count / data.results.length) && data.next) {
      setIsLoad(true);
      try {
        const newData = await CARDS_SERVICE.getNextOrPrevCards(data.next);
        setData(newData);
        setPage((prevState) => prevState + 1);
      } catch (error) {
        setIsNetworkError(true);
      }
      setIsLoad(false);
    }
  };

  useEffect(() => {
    navigate(`/page/${page}`);
  }, [page]);

  return (
    <div className="pagination">
      <button disabled={!data.previous} className="pagination__prev" onClick={prevPageFn}>
        {`←`}
      </button>
      <div>{page}</div>
      <button disabled={!data.next} className="pagination__next" onClick={nextPageFn}>
        {`→`}
      </button>
    </div>
  );
}
