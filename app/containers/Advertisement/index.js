import React, { Component } from 'react';
import styles from './styles.css';

export default class Advertisement extends Component {
  render() {
    return (
      <div className={ styles.advertisement }>
        <img src={ this.props.image } />
        <h5>{ this.props.title }</h5>
        <p>{ this.props.description }</p>
        <a href={ this.props.link } target="_blank"><button>{ this.props.buttonLabel }</button></a>
      </div>
    );
  }
}