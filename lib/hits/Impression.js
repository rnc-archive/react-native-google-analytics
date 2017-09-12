import Hit from '../Hit';

export default class Impression extends Hit {
  constructor(id, name, list, brand, category, variant, position, price) {
    super({
      id: id,
      name: name,
      list: list,
      brand: brand,
      category: category,
      variant: variant,
      position: position,
      price: price
    });
  }

  add(enhancedEcommerce) {
    // Impression property 'list' is a required field.
    // Reference: https://developers.google.com/analytics/devguides/collection/protocol/v1/devguide#enhancedecom
    if (!this.properties || !this.properties.list) {
      return;
    }

    const hitKey = Impression.name.toLowerCase();
    const listKey = this.properties.list.trim().replace(/ /g, '').toLowerCase();
    const impressions = enhancedEcommerce && enhancedEcommerce[hitKey];

    if (!impressions) {
      enhancedEcommerce[hitKey] = {};
    }

    let listIndex = Object.keys(enhancedEcommerce[hitKey]).length;
    let impression = {};

    // Checks if impression list already exist to aggregate the data.
    // If not, it would create a new list for it.
    if (!enhancedEcommerce[hitKey][listKey]) {
      listIndex++;

      impression[`il${listIndex}nm`] = this.properties.list;
      enhancedEcommerce[hitKey][listKey] = {
        index: listIndex,
        list: []
      };
    } else {
      listIndex = enhancedEcommerce[hitKey][listKey].index;
    }

    let productIndex = enhancedEcommerce[hitKey][listKey].list.length;
    productIndex++;

    impression[`il${listIndex}pi${productIndex}id`] = this.properties.id;
    impression[`il${listIndex}pi${productIndex}nm`] = this.properties.name;
    impression[`il${listIndex}pi${productIndex}br`] = this.properties.brand;
    impression[`il${listIndex}pi${productIndex}ca`] = this.properties.category;
    impression[`il${listIndex}pi${productIndex}va`] = this.properties.variant;
    impression[`il${listIndex}pi${productIndex}ps`] = this.properties.position;
    impression[`il${listIndex}pi${productIndex}pr`] = this.properties.price;

    // Replaces initial impression keys with the final version.
    this.replace(impression);

    enhancedEcommerce[hitKey][listKey].list.push(this);
  }
}
