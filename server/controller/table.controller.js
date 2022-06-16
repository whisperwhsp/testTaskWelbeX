const db = require('../db');

class TableController {
  static async getSomeData(req, res) {
    const quantityRows = req.body;
    const rows = await db.query('SELECT * FROM testtask');
    res.json(rows.rows);
  }
}

module.exports = new TableController();
