import { IPerson } from '@services/types';
import './PersonCard.scss';

type PersonType = {
  person: IPerson;
};

export default function PersonCard({ person }: PersonType) {
  return (
    <div className="person-card">
      <div className="person-card__name">{person.name}</div>
      <div className="person-card__birth-year">
        Birth year: <span>{person.birth_year}</span>
      </div>
      <div className="person-card__gender">
        Gender: <span>{person.gender}</span>
      </div>
      <div className="person-card__height">
        Height: <span>{person.height} m</span>
      </div>
      <div className="person-card__mass">
        Mass: <span>{person.mass} kg</span>
      </div>
      <div className="person-card__eye-color">
        Eye color: <span>{person.eye_color}</span>
      </div>
      <div className="person-card__hair-color">
        Hair color: <span>{person.hair_color}</span>
      </div>
    </div>
  );
}
