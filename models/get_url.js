function Get_url(shareid, uk, callback) {
  this.options = {
    host: 'yun.baidu.com',
    port: 80,
    path: '/share/link?shareid=' + shareid + '&uk=' + uk,
    method: 'GET'
  };
  this.url = '';
};

module.exports = Get_url;

Get_url.prototype.req = function(callback) {
  var opt = this.options;
  var http = require('http');
  var func = http.get(opt, function(res) {
    var pageData = "";
    res.setEncoding('UTF-8');
    res.on('data', function(chunk) {
      pageData += chunk;
    });
    res.on('end', function() {
      var reg = '"md5\\\\":\\\\\\"(.+?)\\\\"';
      var md5_s = pageData.match(reg)[1];
      var reg2 = 'dlink\\\\":.+?(http.+?' + md5_s + '\?.+?sh=1)';
      var raw = pageData.match(reg2)[1];
      raw = raw.replace(/\\/gi, "");
      this.url = raw;
      callback(this.url);
    });
  });
};