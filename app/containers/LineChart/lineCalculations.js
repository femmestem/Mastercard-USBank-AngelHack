
const lineCalculations = {
  transactions: [{ date: 1, amount: -50 }, { date: 2, amount: -150.25 }, { date: 3, amount: -20.4 }, { date: 4, amount: 17.47 }, { date: 5, amount: -50 }, { date: 6, amount: -50.25 }, { date: 7, amount: -20.4 }, { date: 8, amount: 17.47 }],
  total: 400,
  calcDifference(transaction) {
    this.total = this.total + transaction;
  },

  genData() {
    const dataPoints = [];
    this.transactions.forEach((transaction) => {
      const tuple = { x: 0, y: 0 };
      tuple.x = transaction.date;
      tuple.y = this.total;
      this.calcDifference(transaction.amount);
      dataPoints.push(tuple);
    });
    return dataPoints;
  },
};


export default lineCalculations;
