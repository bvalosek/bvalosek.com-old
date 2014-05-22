module.exports = StaticServer;

var express = require('express');

/**
 * Serve static files from the web root
 * @constructor
 */
function StaticServer(config, http)
{
  http.use(express.static(config('http.webroot')));
  console.log('static server middleware added');
}
