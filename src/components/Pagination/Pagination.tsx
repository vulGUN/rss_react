// import { useState } from 'react';
import CardsService from '@services/CardsService';
import { useData } from 'src/contexts/DataProviders';
import './Pagination.scss';

const CARDS_SERVICE = new CardsService();

export default function Pagination() {
  // const [count, setCount] = useState<number>(1);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { data, setData, setIsLoad, page, setPage } = useData();

  const prevPageFn = async () => {
    if (page > 1 && data.previous) {
      setIsLoad(true);
      try {
        const newData = await CARDS_SERVICE.getNextOrPrevCards(data.previous);
        setData(newData);
      } catch (error) {
        console.error(error);
      }
      setIsLoad(false);
      setPage((prevState) => prevState - 1);
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
        console.error(error);
      }
      setIsLoad(false);
    }
  };

  return (
    <div className="pagination">
      <button disabled={!data.previous} className="pagination__prev" onClick={prevPageFn}>
        prev
      </button>
      <div>{page}</div>
      <button disabled={!data.next} className="pagination__next" onClick={nextPageFn}>
        next
      </button>
    </div>
  );
}
