import PersonCard from '@components/PersonalCard/PersonCard';
import Loader from '@components/Loader/Loader';
import Pagination from '@components/Pagination/Pagination';
import { useData } from 'src/contexts/DataProviders';
import './PersonListSection.scss';

interface IPersonListProps {
  isNetworkError: boolean;
}

export default function PersonListSection({ isNetworkError }: IPersonListProps) {
  if (isNetworkError) {
    throw new Error('Network error');
  }

  const { data, isLoad } = useData();

  return (
    <div className="person-list">
      {isLoad ? (
        <Loader />
      ) : (
        <>
          <div className="person-list__container">
            {data.results && data.results.length > 0 ? (
              data.results.map((item, index) => <PersonCard key={index} {...item} />)
            ) : (
              <div>Sorry, nothing found. Try again</div>
            )}
          </div>
          <Pagination />
        </>
      )}
    </div>
  );
}
