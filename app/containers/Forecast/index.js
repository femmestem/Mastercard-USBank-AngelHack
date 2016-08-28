import React, { Component } from 'react';
import projectionGrowth from '../../assets/images/projection-growth.png';

export default class Forecast extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <img src={ projectionGrowth } alt="Projected cash"/>
      </div>
    );
  }
}