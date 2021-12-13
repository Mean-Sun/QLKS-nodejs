const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController');

/* GET home page. */
router.get('/login', authController.login);
router.get('/register', authController.register);
router.get('/fogotPassword', authController.fogotPassword);

module.exports = router;
