import React from 'react';
import PersonCard from '@components/PersonalCard/PersonCard';
import Loader from '@components/Loader/Loader';
import './PersonListSection.scss';
import { IPerson } from '@components/PersonalCard/types';

interface IPersonListProps {
  people: IPerson[];
  isLoad: boolean;
  isNetworkError: boolean;
}

export default class PersonListSection extends React.Component<IPersonListProps> {
  constructor(props: IPersonListProps) {
    super(props);
  }
  render() {
    if (this.props.isNetworkError) {
      throw new Error('Network error');
    }
    return (
      <>
        {this.props.isLoad ? (
          <Loader />
        ) : (
          <div className="person-list">
            {this.props.people && this.props.people.length > 0 ? (
              this.props.people.map((item, index) => <PersonCard key={index} person={item} />)
            ) : (
              <div>Sorry, nothing found. Try again</div>
            )}
          </div>
        )}
      </>
    );
  }
}
