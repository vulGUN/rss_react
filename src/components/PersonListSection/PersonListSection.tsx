import PersonCard from '@/components/PersonCard/PersonCard';
import Loader from '@/components/Loader/Loader';
import Pagination from '@/components/Pagination/Pagination';
import { Link, Outlet, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '@/store/dataSlice';
import { RootState } from '@/store/Store';
import './PersonListSection.scss';

export default function PersonListSection() {
  const { isNetworkError, data, isLoad, page, isOpen } = useSelector(
    (state: RootState) => state.data
  );
  const dispatch = useDispatch();
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  if (isNetworkError) {
    throw new Error('Network error');
  }

  const handleCloseBtn = () => {
    if (isOpen) {
      navigate(`/page/${page}`);
      dispatch(setOpen(false));
    }
  };

  return (
    <div className="person-list">
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <div className="person-list__wrapper">
            <div className="person-list__container" onClick={handleCloseBtn}>
              {data.results && data.results.length > 0 ? (
                data.results.map((item, index) => (
                  <Link key={index} to={`/page/${pageNumber}/details/${index + 1}`}>
                    <PersonCard {...item} />
                  </Link>
                ))
              ) : (
                <div>Sorry, nothing found. Try again</div>
              )}
            </div>
            <Outlet />
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
}
