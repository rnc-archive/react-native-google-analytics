class Analytics {
  constructor(trackingId, clientId, version) {
    this.version = version || 1;
    this.trackingId = trackingId;
    this.clientId = clientId;
  }

  send(hit) {

    hit.set({
      v: this.version,
      tid: this.trackingId,
      cid: this.clientId
    });

    fetch('https://ssl.google-analytics.com/collect', {
      method: 'post',
      body: hit.toQueryString()
    });
  }
}

module.exports = Analytics;
