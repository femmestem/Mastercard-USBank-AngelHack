import {
  SET_CREDIT_TRANSACTION_HISTORY,
} from './constants';

export function setCreditTransactionHistory(API_RESPONSE) {
    const CurrentMonthTrxns = API_RESPONSE.CCTranHistoryResponseData.TransactionDetails.TransactionData;

  return {
    type: SET_CREDIT_TRANSACTION_HISTORY,
    currentMonthTrxns: CurrentMonthTrxns,
    API_RESPONSE: API_RESPONSE
  };
}
