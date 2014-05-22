module.exports = Postgres;

var Promise         = require('es6-promise').Promise;
var Application     = require('billy').Application;
var PostgresAdapter = require('../lib/PostgresAdapter.js');

/**
 * Provide the application with a sql dependency.
 * @constructor
 * @param {Application} app
 */
function Postgres(config, app)
{
  var url = config('postgres.url');
  if (!url) {
    throw 'no postgres credentials provided';
  }

  this.adapter = new PostgresAdapter(url);
  app.register('sql', this.adapter);
}

/**
 * Connect to the db.
 * @return {Promise}
 */
Postgres.prototype.start = function()
{
  return this.adapter.connect().then(function() {
    console.log('connected to postgres DB');
  });
};

