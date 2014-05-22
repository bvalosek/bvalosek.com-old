var readFileSync = require('fs').readFileSync;

exports.up = function(db, callback) {
  var sql = readFileSync(__dirname + '/sql/quotes.sql').toString();
  db.runSql(sql, callback);
};

exports.down = function(db, callback) {
  db.runSql('drop table if exists quotes', callback);
};
