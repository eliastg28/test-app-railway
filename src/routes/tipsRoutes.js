const express = require('express');
const { getHealthTips } = require('../controllers/tipsController');

const router = express.Router();

router.get('/', getHealthTips);

module.exports = router;
