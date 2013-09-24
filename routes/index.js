
/*
 * GET home page.
 */

module.exports = function(app) {
  app.get('/', function(req, res) {
    res.render('index', {
      title: 'Home'
    })
  });

  app.get('/req', function(req, res) {
    var get_url = require('../models/get_url.js');
    var new_url = new get_url(req.query.shareid, req.query.uk);
    new_url.req(function(ret) {
      res.send(ret);
    });
  });

};
