import { IPerson } from '@components/PersonalCard/types';
import './PersonCard.scss';

export default function PersonCard({ name, birth_year, gender }: IPerson) {
  return (
    <div className="person-card">
      <div className="person-card__name">{name}</div>
      <div className="person-card__birth-year">
        Birth year: <span>{birth_year}</span>
      </div>
      <div className="person-card__gender">
        Gender: <span>{gender}</span>
      </div>
    </div>
  );
}
