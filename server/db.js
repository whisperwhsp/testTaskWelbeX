const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: 'superuser',
  host: 'localhost',
  port: '5432',
  database: 'welbex',
});

module.exports = pool;
