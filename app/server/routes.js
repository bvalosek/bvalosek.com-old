var express     = require('express');
var Application = require('billy').Application;

/**
 * All endpoints / pages / actions are wired up here.
 * @param {Application} app
 * @param {express} http
 */
module.exports = function(app, http)
{
  http.use('/quotes.json', app.make(require('./endpoints/quotes.js')));
  http.use('/debug', app.make(require('./endpoints/debug.js')));
  http.get('/', app.make(require('./pages/home.js')));
};
