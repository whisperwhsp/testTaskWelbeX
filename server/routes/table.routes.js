const Router = require('express');
const tableController = require('../controller/table.controller');

const router = new Router();

router.get('/table/:rows', () => tableController.getSomeData);

module.exports = router;
