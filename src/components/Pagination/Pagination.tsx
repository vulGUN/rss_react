import CardsService from '@/services/CardsService';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setData, setIsLoad, setPage, setIsNetworkError } from '@/store/dataSlice';
import { RootState } from '@/store/Store';
import './Pagination.scss';

const CARDS_SERVICE = new CardsService();

export default function Pagination() {
  const { data, page } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const prevPageFn = async () => {
    if (page > 1 && data.previous) {
      dispatch(setIsLoad(true));
      try {
        const newData = await CARDS_SERVICE.getNextOrPrevCards(data.previous);
        dispatch(setData(newData));
        dispatch(setPage(page - 1));
      } catch (error) {
        dispatch(setIsNetworkError(true));
      }
      dispatch(setIsLoad(false));
    }
  };

  const nextPageFn = async () => {
    if (page < Math.ceil(data.count / data.results.length) && data.next) {
      dispatch(setIsLoad(true));
      try {
        const newData = await CARDS_SERVICE.getNextOrPrevCards(data.next);
        dispatch(setData(newData));
        dispatch(setPage(page + 1));
      } catch (error) {
        dispatch(setIsNetworkError(true));
      }
      dispatch(setIsLoad(false));
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
