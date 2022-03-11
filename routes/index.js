const express = require('express');
const router = express.Router();
const exController = require('../controllers/exController');
const {catchErrors} = require('../handlers/errorHandlers');

router.get('/', exController.homePage);
router.get('/projects', exController.projects);
router.get('/resume', exController.resume);

module.exports = router;