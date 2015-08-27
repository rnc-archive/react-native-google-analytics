var Hit = require('../Hit');

class Transaction extends Hit {
  constructor(transactionId, transactionAffiliation, transactionRevenue, transactionShipping, transactionTax, currency, experiment) {
    super('transaction', {
      ti: transactionId,
      ta: transactionAffiliation,
      tr: transactionRevenue,
      ts: transactionShipping,
      tt: transactionTax,
      cu: currency
    }, experiment);
  }
}

module.exports = Transaction;
