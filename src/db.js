const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  uri: process.env.MYSQL_URL  // Cambia a usar la URL completa
});

module.exports = pool;

