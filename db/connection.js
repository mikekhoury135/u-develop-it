const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  socketPath: '/tmp/mysql.sock',
  database: 'election'
});

module.exports = db;
