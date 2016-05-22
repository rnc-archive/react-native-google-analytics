import Hit from '../Hit';

export default class Item extends Hit {
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
