const express = require('express');
const router = express.Router();

const rentRoomController = require('../controllers/rentRoomController');

/* GET home page. */
router.get('/', rentRoomController.list);
router.get('/getRoom', rentRoomController.getRoom);


module.exports = router;