import Impression from './hits/Impression';
import Serializable from './Serializable';

export default class EnhancedEcommerce extends Serializable {
  isEmpty() {
    return Object.keys(this.properties).length ? false : true;
  }

  add(hit) {
    if (!(hit instanceof Impression)) {
      throw new Error("Only enhanced ecommerce hits can be added using 'add' command.");
    }

    hit.add(this.properties);
  }

  toQueryString() {
    const hitKeys = Object.keys(this.properties);

    if (!hitKeys.length) {
      return '';
    }

    let query = [];

    hitKeys.forEach(hitKey => {
      const listKeys = Object.keys(this.properties[hitKey]);

      listKeys.forEach(listKey => {
        const hits = this.properties[hitKey][listKey].list;

        if (hits) {
          hits.forEach(hit => {
            query.push(hit.toQueryString());
          });
        }
      });
    });

    // Clears all enhanced ecommerce impression hits from memory.
    this.properties = {};

    return query.join('&');
  }
}
