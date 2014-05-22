var fs   = require('fs');
var path = require('path');

module.exports = {
  url: process.env.DATABASE_URL || makeLocalUrl() || null
};

function makeLocalUrl()
{
  var localPath = path.resolve(path.join(__dirname, '../../../database.json'));
  if (!fs.existsSync(localPath))
    return null;
  var local = require(localPath).local;

  if (!local)
    return null;

  return 'postgres://' +
    local.user + ':' +
    local.password + '@' +
    local.host + '/' +
    local.database;
}
