import Loader from '@/components/Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOpen } from '@/store/dataSlice';
import { RootState } from '@/store/Store';
import './PersonDetails.scss';

export default function PersonDetails() {
  const { page, data, isLoad } = useSelector((state: RootState) => state.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { personId } = useParams();
  const id = personId ? +personId - 1 : 0;

  const handleCloseBtn = () => {
    navigate(`/page/${page}`);
    dispatch(setOpen(false));
  };

  useEffect(() => {
    dispatch(setOpen(true));
  }, []);

  return (
    <div className="person-details">
      <div className="person-details__header">
        <div>{data.results[id].name}</div>
        <button className="person-details__close-btn" onClick={handleCloseBtn}>
          X
        </button>
      </div>
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <div className="person-details__info">
            <div>
              Gender: <span>{data.results[id].gender}</span>
            </div>
            <div>
              Height: <span>{data.results[id].height} m</span>
            </div>
            <div>
              Mass: <span>{data.results[id].mass} kg</span>
            </div>
            <div>
              Eye color: <span>{data.results[id].eye_color}</span>
            </div>
            <div>
              Hair color: <span>{data.results[id].hair_color}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
