
import React, { Component, PropTypes } from 'react';
import SingleAnimal from 'SingleAnimal';

export default class Animals extends Component {

  render () {
    const { animals } = this.props;
    return (
      <span>
        <h1> Animals are great. </h1>
        <ul className="items-list">
          {animals.map((animal, i) => {
            return <SingleAnimal key={i} animal={animal} />;
          })}
        </ul>
      </span>
    )
  }
}

Animals.propTypes = {
  animals: PropTypes.arrayOf(PropTypes.shape({
    'type': PropTypes.string,
    'name': PropTypes.string,
    'color': PropTypes.string,
    'gender': PropTypes.string
   })).isRequired,
}