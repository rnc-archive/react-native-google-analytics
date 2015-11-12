var Hit = require('../Hit');

class Item extends Hit {
  constructor(transactionId, itemName, itemPrice, itemQuantity, itemCode, itemVariation, currency, experiment) {
    super('item', {
      ti: transactionId,
      in: itemName,
      ip: itemPrice,
      iq: itemQuantity,
      ic: itemCode,
      iv: itemVariation,
      cu: currency
    }, experiment);
  }
}

module.exports = Item;
