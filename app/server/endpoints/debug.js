module.exports = debug;

var Router = require('express').Router;

/**
 * Rando middleware
 */
function debug()
{
  var router = new Router();

  // Messn with that session stuff
  router.get('/session', function(req, res) {
    var session = req.session;
    if (!session.count) {
      session.count = 1;
    } else {
      session.count++;
    }
    res.end('viewed ' + session.count + ' times');
  });

  return router;
}
