import {
  // array of 3 objects returned from API call
  SET_CREDIT_TRANSACTION_HISTORY,
} from './constants';

export function setCreditTransactionHistory(arrOfTrxnStatements) {
  return {
    type: SET_CREDIT_TRANSACTION_HISTORY,
    transactions: arrOfTrxnStatements
  };
}
