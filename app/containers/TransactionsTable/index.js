import React, { Component } from 'react';
import { connect } from 'react-redux';
import styles from './styles.css';

const mapIdsToNames = {
  '00000': 'H & M Feed',
  '06598': 'Sandra\'s Fertilizer',
  '06549': 'OfficeMax',
  '06579': 'Arco Gas',
  '06532': 'MineralCo',
  '06500': 'Ace Hardware',
  '06542': 'Farm Supplies International',
  '06509': 'Hibbert Lumber',
};

const dummyTransactions = [
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "50.80",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05691",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "29.95",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "08675",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "26.20",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05441",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-09",
    "TransactionAmount": "16.80",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-10-04",
    "TransactionAmount": "86.91",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05691",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-02",
    "TransactionAmount": "548.62",
    "TransactionType": "Credit",
    "TransactionCode": "300",
    "SICMCCCode": "00000",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-10-02",
    "TransactionAmount": "29.98",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05912",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06549"
  },
  {
    "TransactionPostDate": "2012-09-28",
    "TransactionAmount": "13.20",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05310",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06579"
  },
  {
    "TransactionPostDate": "2012-09-26",
    "TransactionAmount": "9.79",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05912",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06549"
  },
  {
    "TransactionPostDate": "2012-09-26",
    "TransactionAmount": "6.49",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06509"
  },
  {
    "TransactionPostDate": "2012-09-25",
    "TransactionAmount": "39.72",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-09-24",
    "TransactionAmount": "40.00",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05722",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "00000"
  },
  {
    "TransactionPostDate": "2012-09-24",
    "TransactionAmount": "23.42",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06532"
  },
  {
    "TransactionPostDate": "2012-09-20",
    "TransactionAmount": "5.13",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06500"
  },
  {
    "TransactionPostDate": "2012-09-19",
    "TransactionAmount": "68.24",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05943",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06542"
  },
  {
    "TransactionPostDate": "2012-09-19",
    "TransactionAmount": "16.73",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06509"
  },
  {
    "TransactionPostDate": "2012-09-19",
    "TransactionAmount": "6.24",
    "TransactionType": "Credit",
    "TransactionCode": "400",
    "SICMCCCode": "05943",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06542"
  },
  {
    "TransactionPostDate": "2012-09-18",
    "TransactionAmount": "13.47",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06532"
  },
  {
    "TransactionPostDate": "2012-09-18",
    "TransactionAmount": "37.47",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-09-17",
    "TransactionAmount": "38.86",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05949",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06598"
  },
  {
    "TransactionPostDate": "2012-09-17",
    "TransactionAmount": "13.40",
    "TransactionType": "Debit",
    "TransactionCode": "600",
    "SICMCCCode": "05411",
    "CondensedSICMCCGroup": "00000",
    "MerchantNumber": "06500"
  }
];

class TransactionsTable extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th className={ styles.date }>Date</th>
            <th className={ styles.merchant }>Merchant</th>
            <th className={ styles.amount }>Amount</th>
          </tr>
        </thead>
        <tbody>
          { /* this.props.TransactionData */ dummyTransactions.map((trx, i) => (
            <tr key={ i }>
              <td>{ trx.TransactionPostDate }</td>
              <td>{ mapIdsToNames[trx.MerchantNumber] || trx.MerchantNumber }</td>
              <td className={ styles.currency }>{ (trx.TransactionType === 'Debit' ? '–$' : '$') + trx.TransactionAmount }</td>
            </tr>
          )) }
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ TransactionData }) {
  return { TransactionData };
}

export default connect(mapStateToProps)(TransactionsTable)