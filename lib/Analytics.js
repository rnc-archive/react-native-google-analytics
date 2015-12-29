class Analytics {
  constructor(trackingId, clientId, version, userAgent) {
    this.version = version || 1;
    this.trackingId = trackingId;
    this.clientId = clientId;
    this.userAgent = userAgent || null;
  }

  send(hit) {

    hit.set({
      v: this.version,
      tid: this.trackingId,
      cid: this.clientId
    });

    let options = {
      method: 'get',
    }

    if (this.userAgent) {
      options.headers = {
        'user-agent': this.userAgent
      };
    }

    fetch('https://ssl.google-analytics.com/collect?' + hit.toQueryString() + '&z=' + Math.round(Math.random() * 1e8), options);
  }
}

module.exports = Analytics;
