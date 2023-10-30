import PersonCard from '@components/PersonalCard/PersonCard';
import Loader from '@components/Loader/Loader';
import { IPerson } from '@components/PersonalCard/types';
import './PersonListSection.scss';

interface IPersonListProps {
  people: IPerson[];
  isLoad: boolean;
  isNetworkError: boolean;
}

export default function PersonListSection({ people, isLoad, isNetworkError }: IPersonListProps) {
  if (isNetworkError) {
    throw new Error('Network error');
  }
  return (
    <div className="person-list">
      {isLoad ? (
        <Loader />
      ) : (
        <div className="person-list__container">
          {people && people.length > 0 ? (
            people.map((item, index) => <PersonCard key={index} {...item} />)
          ) : (
            <div>Sorry, nothing found. Try again</div>
          )}
        </div>
      )}
    </div>
  );
}
