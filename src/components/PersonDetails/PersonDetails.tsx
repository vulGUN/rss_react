import { useData } from 'src/contexts/DataProviders';
import Loader from '@components/Loader/Loader';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import './PersonDetails.scss';

export default function PersonDetails() {
  const { personId } = useParams();
  const navigate = useNavigate();
  const { page, data, isLoad, setOpen } = useData();
  const id = personId ? +personId - 1 : 0;

  const handleCloseBtn = () => {
    navigate(`/page/${page}`);
    setOpen(false);
  };

  useEffect(() => {
    setOpen(true);
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
