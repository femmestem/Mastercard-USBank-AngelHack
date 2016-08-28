/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import TransactionsTable from '../TransactionsTable';
import TransactionsHeader from '../TransactionsHeader';

export default class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className={`row`}>

        <div className={`column small-12`}>
            <div className={`row align-center`}>
                <div className={`column small-10`}>
                    <TransactionsHeader />
                    <TransactionsTable />
                </div>
            </div>
        </div>

      </div>
    );
  }
}
