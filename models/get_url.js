function Get_url(shareid, uk) {
  this.options = {
    host: 'yun.baidu.com',
    port: 80,
    path: '/share/link?shareid=' + shareid + '&uk=' + uk,
    method: 'GET'
  };
  this.json = {
    shareid: shareid,
    uk: uk,
    error: true,
    url: null
  };
};

module.exports = Get_url;

Get_url.prototype.u_req = function(callback) {
  var opt = this.options;
  var http = require('http');
  var json = this.json;
  var func = http.get(opt, function(res) {
    var pageData = "";
    res.setEncoding('UTF-8');
    res.on('data', function(chunk) {
      pageData += chunk;
    });
    res.on('end', function() {
      var reg = RegExp('"md5\\\\":\\\\\\"(.+?)\\\\"');
      if(reg.test(pageData) == false) {
        return callback(json);
      }
      var md5_s = pageData.match(reg)[1];
      var reg2 = RegExp('dlink\\\\":.+?(http.+?' + md5_s + '\?.+?sh=1)');
      if(reg2.test(pageData) == false) {
        return callback(json);
      }
      var raw = pageData.match(reg2)[1];
      raw = raw.replace(/\\/gi, "");
      json.url = raw;
      json.error = false;
      callback(json);
    });
  });
};
