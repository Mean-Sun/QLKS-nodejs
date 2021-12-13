const express = require('express');
const router = express.Router();

const roomController = require('../controllers/roomController');

/* GET home page. */
router.get('/', roomController.list);

module.exports = router;
