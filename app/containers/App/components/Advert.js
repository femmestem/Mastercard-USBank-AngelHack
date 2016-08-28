import React, {Component} from 'react';
import styles from './Advert.css';

export default class Advert extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true
        };

        this.toggleAdvert = this.toggleAdvert.bind(this);
    }

    toggleAdvert(){
        this.setState(
            Object.assign({}, this.state, {
                isOpen: !this.state.isOpen
            })
        );
    }

    render() {

        if(!this.state.isOpen){ return null; }

        return (
            <div className={`text-right small-4 column ${styles.advert}`}>
                <span className={styles.crossmark} onClick={this.toggleAdvert}>&#x2715;</span>
                <p>You qualify for a small business loan from Mastercard!</p>
                <a href="#">Find out more.</a>
            </div>
        );
    }
}