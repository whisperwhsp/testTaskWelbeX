/* eslint-disable class-methods-use-this */
const db = require('../db');

class TableController {
  async getSomeData(req, res) {
    const rows = await db.query('SELECT * FROM testtask');
    res.json(rows.rows);
  }
}

module.exports = new TableController();
