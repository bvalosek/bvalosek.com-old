module.exports = PostgresAdapter;

var Client  = require('pg').Client;
var Promise = require('es6-promise').Promise;

/**
 * Like the PG client object but with a simple promise-based interface
 * @constructor
 * @param {string} url Database connection string
 */
function PostgresAdapter(url)
{
  this._client = new Client(url);
}

/**
 * Connect to the db.
 * @return {Promise}
 */
PostgresAdapter.prototype.connect = function()
{
  var client = this._client;
  return new Promise(function(resolve, reject) {
    client.connect(function(err) {
      err ? reject(err) : resolve();
    });
  });
};

/**
 * Query the db.
 * @param {string} sql
 * @param {array.<any>} fields
 * @return {Promise}
 */
PostgresAdapter.prototype.query = function(sql, fields)
{
  var client = this._client;
  return new Promise(function(resolve, reject) {
    client.query(sql, fields, function(err, result) {
      err ? reject(err) : resolve(result.rows);
    });
  });
};

