const express = require('express');
const describeController = require('../controllers/describeController');

const router = express.Router();

router.post('/describe', describeController.describeImage);

module.exports = router;
