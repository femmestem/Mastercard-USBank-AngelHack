import React, { Component } from 'react';
import styles from './styles.css';
import Advertisement from '../Advertisement';

// Images
import projectionGrowth from '../../assets/images/projection-growth.png';
import loan from '../../assets/images/loans.jpg';
import retirement from '../../assets/images/retirement.jpg';

const ads = [
  {
    title: 'Expand Your Business with a Small Business Loan',
    image: loan,
    description: 'US Bank is committed to helping you grow your business. US bank partners with the Small Business ' +
    'Administration (SBA), and has provided more than $6 billion in SBA-guaranteed financing solutions to thousands ' +
    'of small businesses in America.',
    buttonLabel: 'Speak to a Representative',
    link: 'https://www.usbank.com/small-business/credit-financing/sba-loans.html',
  },
  {
    title: 'Save for Retirement',
    image: retirement,
    description: 'US Bank provides a range of savings and investment options to help you prepare for your retirement.',
    buttonLabel: 'Speak to a Representative',
    link: 'https://www.usbank.com/investments-wealth-management/retirement-planning-iras.html',
  },
];

export default class Forecast extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <div>
          <div className={ styles.float60 }>
            <img src={ projectionGrowth } alt="Projected cash"/>
          </div>
          <div className={ styles.float40 }>
            <div className={ styles.float60 }><select name="month" id="month-select">
              <option value="next-month">Next Month</option>
            </select>
            <h5 className={ styles.currencyHeader }>EARNING</h5>
            <p className={ styles.currency }>$1050</p>
            <h5 className={ styles.currencyHeader }>SPENDING</h5>
            <p className={ styles.currency }>$910</p></div>
          </div>
        </div>
        <h4 className={ styles.recommendations }>Recommendations</h4>
        { ads.map(ad => (
          <Advertisement title={ ad.title }
                         image={ ad.image } description={ ad.description }
                         buttonLabel={ ad.buttonLabel }
                         link={ ad.link }
          />
        )) }
      </div>
    );
  }
}