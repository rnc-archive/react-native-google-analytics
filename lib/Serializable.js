class Serializable {

  constructor() {
    this.properties = {};
  }

  toObject() {
    return this.properties;
  }

  toJSON() {
    return JSON.stringify(this.properties);
  }

  toQueryString() {
    var str = [];
    var obj = this.toObject();
    for(var p in obj) {
      if (obj.hasOwnProperty(p) && obj[p]) {
        str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
      }
    }
    return str.join('&');
  }
}

module.exports = Serializable;
