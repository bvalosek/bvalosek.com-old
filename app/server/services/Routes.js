module.exports = Routes;

var Promise     = require('es6-promise').Promise;
var Application = require('billy').Application;

var quotes = require('../endpoints/quotes.js');

/**
 * Setup all routes for the application
 * @constructor
 * @param {Application} app
 */
function Routes(http, app)
{
  app.make(require('../routes.js'));
  console.log('web routes added');
}

