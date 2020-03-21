var low = require('lowdb');
var Filesync = require('lowdb/adapters/FileSync');
var adapter = new Filesync('db.json');
db = low(adapter);

// Set some defaults (required if your JSON file is empty)
db.defaults({ users: [], products: [], sessions: []})
  .write()

  module.exports = db;