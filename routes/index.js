const express = require('express');
const router = express.Router();
const exController = require('../controllers/exController');

router.get('/', exController.homePage);

module.exports = router;