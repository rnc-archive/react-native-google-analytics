class Analytics {
  constructor(trackingId, clientId, version, userAgent) {
    this.version = version || 1;
    this.trackingId = trackingId;
    this.clientId = clientId;
    this.userAgent = userAgent || null;
    this.dimension = {};
    this.dimensionTag = '';
    
    if (!userAgent) {
      throw new Error('You must specify a user agent in order for Google Analytics to accept the event. Use DeviceInfo.getUserAgent() from react-native-device-info for this.');
    }
  }

  setDimension(index, name) {
    this.dimension[index] = name;
    var dimensions = [];
    
    for (var key in this.dimension) {
      var param = 'cd'.concat(key.toString());
      dimensions.push(param + '=' + this.dimension[key]);
    }
    
    this.dimensionTag = '&' + dimensions.join('&');
  }
  
  removeDimension(index) {
    delete this.dimension[index];
    var dimensions = [];
    
    for (var key in this.dimension) {
      var param = 'cd'.concat(key.toString());
      dimensions.push(param + '=' + this.dimension[key]);
    }
    
    this.dimensionTag = '&' + dimensions.join('&');
  }
  
  send(hit) {

    hit.set({
      v: this.version,
      tid: this.trackingId,
      cid: this.clientId
    });

    let options = {
      method: 'get',
      headers: {
        'User-Agent': this.userAgent
      }
    }

    return fetch(`https://www.google-analytics.com/collect?${hit.toQueryString()}&z=${Math.round(Math.random() * 1e8)}` + this.dimensionTag, options);
  }
}

module.exports = Analytics;
