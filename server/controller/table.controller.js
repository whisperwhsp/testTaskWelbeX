/* eslint-disable class-methods-use-this */
const db = require('../db');

class TableController {
  async getSomeData(req, res) {
    const { limit, page } = req.query;
    const COMMAND = 'SELECT * FROM testtask LIMIT $1 OFFSET ($2 - 1) * $1';
    const responseDB = await db.query(COMMAND, [limit, page]);

    res.set({
      'Access-Control-Expose-Headers': 'total-count-rows',
      'total-count-rows': responseDB.rowCount,
    });
    console.log(responseDB.rows);
    res.json(responseDB.rows);
  }
}

module.exports = new TableController();
