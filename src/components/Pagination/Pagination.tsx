import { useState } from 'react';
import CardsService from '@services/CardsService';
import { useData } from 'src/contexts/DataProviders';
import './Pagination.scss';

const CARDS_SERVICE = new CardsService();

export default function Pagination() {
  const [count, setCount] = useState<number>(1);
  const { data, setData, setIsLoad } = useData();

  const prevPageFn = async () => {
    if (count > 1 && data.previous) {
      setCount((prevState) => (prevState -= 1));
      setIsLoad(true);
      const newData = await CARDS_SERVICE.getNextOrPrevCards(data.previous);
      setData(newData);
      setIsLoad(false);
    }
  };

  const nextPageFn = async () => {
    if (count < Math.ceil(data.count / data.results.length) && data.next) {
      setCount((prevState) => (prevState += 1));
      setIsLoad(true);
      const newData = await CARDS_SERVICE.getNextOrPrevCards(data.next);
      setData(newData);
      setIsLoad(false);
    }
  };

  return (
    <div className="pagination">
      <button disabled={!data.previous} className="pagination__prev" onClick={prevPageFn}>
        prev
      </button>
      <div>{count}</div>
      <button disabled={!data.next} className="pagination__next" onClick={nextPageFn}>
        next
      </button>
    </div>
  );
}
