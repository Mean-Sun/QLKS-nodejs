const express = require('express');
const router = express.Router();

const typeofRoomController = require('../controllers/typeofRoomController');

/* GET home page. */
router.get('/', typeofRoomController.list);

module.exports = router;
