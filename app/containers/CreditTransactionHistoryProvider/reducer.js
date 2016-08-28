import initialState from './credit_transaction_history'
import {
  SET_CREDIT_TRANSACTION_HISTORY,
} from './constants';

const periodMonths = 3;

var currentMonthTrxns = initialState[0].CCTranHistoryResponseData.TransactionDetails.TransactionData;
var periodTrxns = [];

for (i=0,l=periodMonths, i++) {
    periodTrxns.push(initialState[i].CCTranHistoryResponseData.TransactionDetails.TransactionData);
}

function calcCenterMovingAvg(arr) {
    var ctrMvAvg;
    return ctrMvAvg;
}

function calcMovingAvg(arr) {
    var mvAvg;
    return mvAvg;
}

function getTransByType(arr, ...trxnType) {
    var trxns;
    return trxns;
}

function calcForecast(arr, ...trxnType) {
    var forecast;
    return forecast;
}

function getMtd(arr, ...trxnType) {
    var totalMtd;
    return totalMtd;
}

// _initialState is a mutated copy of the imported initialState
const _initialState = Object.assign({}, initialState,
            { transactions: action.transactions,
              // actualEarning: getMtd(currentMonthTrxns, ["credit"]),
              // actualSpending: getMtd(currentMonthTrxns, ["debit"]),
              // forecastEarning: calcForecast(periodTrxns, ["debit"]),
              // forecastSpending: calcForecast(periodTrxns, ["credit"])
              actualEarning: 8000.0,
              actualSpending: 10000.0,
              forecastEarning: 9000.0,
              forecastSpending: 8800.0
            }
        );

function creditTransactionHistoryReducer(state = _initialState, action) {
  switch (action.type) {
    case SET_CREDIT_TRANSACTION_HISTORY:

        return Object.assign({}, state,
            { transactions: action.transactions,
              // actualEarning: getMTD(currentMonthTrxns, ["credit"]),
              // actualSpending: getMTD(currentMonthTrxns, ["debit"]),
              // forecastEarning: calcForecast(periodTrxns, ["debit"]),
              // forecastSpending: calcForecast(periodTrxns, ["credit"])
              actualEarning: 8000.0,
              actualSpending: 10000.0,
              forecastEarning: 9000.0,
              forecastSpending: 8800.0
            }
        );

    default:
      return state;
  }
}
