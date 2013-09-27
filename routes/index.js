
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
    new_url.u_req(function(ret) {
      res.send(ret);
    });
  });

  app.get('/web_app', function(req, res) {
    res.render('web_app', {
      title: 'Web App'
    })
  });

  app.post('/web_app', function(req, res) {
    var get_url = require('../models/get_url.js');
    var currentshareid = req.body.shareid;
    var currentuk = req.body.uk;
    return res.redirect('/req?shareid=' + currentshareid + '&uk=' + currentuk);
  });
};
