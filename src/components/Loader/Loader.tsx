import React from 'react';
import './Loader.scss';

export default class Loader extends React.Component {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <div className="loader">
        <div className="loader__item" id="loader__item-1" />
        <div className="loader__item" id="loader__item-2" />
        <div className="loader__item" id="loader__item-3" />
      </div>
    );
  }
}
