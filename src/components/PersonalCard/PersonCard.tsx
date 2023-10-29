import React from 'react';
import { PersonType } from '@components/PersonalCard/types';
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
      </div>
    );
  }
}
