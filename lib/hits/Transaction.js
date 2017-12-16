import Hit from '../Hit';

export default class Transaction extends Hit {
  constructor(transactionId, transactionAffiliation, transactionRevenue, transactionShipping, transactionTax, currency, experiment) {
    super({
      t: 'transaction',
      ti: transactionId,
      ta: transactionAffiliation,
      tr: transactionRevenue,
      ts: transactionShipping,
      tt: transactionTax,
      cu: currency
    }, experiment);
  }
}
