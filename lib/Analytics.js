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
      headers: {
        'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 8_0 like Mac OS X) AppleWebKit/600.1.3 (KHTML, like Gecko) Version/8.0 Mobile/12A4345d Safari/600.1.4'
      },
      body: hit.toQueryString()
    });
  }
}

module.exports = Analytics;
