import React from 'react';
import { PersonType } from 'src/types';
import './PersonCard.scss';

export default class PersonalCard extends React.Component<PersonType> {
  constructor(props: PersonType) {
    super(props);
  }

  render() {
    return (
      <div className="person-card">
        <div className="person-card__name">{this.props.person.name}</div>
        <div className="person-card__birth-year">
          Birth year: <span>{this.props.person.birth_year}</span>
        </div>
        <div className="person-card__gender">
          Gender: <span>{this.props.person.gender}</span>
        </div>
        <div className="person-card__height">
          Height: <span>{this.props.person.height} m</span>
        </div>
        <div className="person-card__mass">
          Mass: <span>{this.props.person.mass} kg</span>
        </div>
        <div className="person-card__eye-color">
          Eye color: <span>{this.props.person.eye_color}</span>
        </div>
        <div className="person-card__hair-color">
          Hair color: <span>{this.props.person.hair_color}</span>
        </div>
      </div>
    );
  }
}
