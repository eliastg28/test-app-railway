const express = require('express');
const { getRoutines } = require('../controllers/routineController');

const router = express.Router();

router.get('/:age', getRoutines);

module.exports = router;
