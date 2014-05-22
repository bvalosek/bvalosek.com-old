module.exports = quotes;

var Router = require('express').Router;

/**
 * Quote model
 */
function quotes(sql)
{
  var router = new Router();

  router.get('/', function(req, res) {
    sql.query('select * from quotes').then(function(quotes) {
      res.send({
        quotes: quotes
      });
    });
  });

  return router;
}
