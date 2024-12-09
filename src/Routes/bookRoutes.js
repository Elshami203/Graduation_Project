const express = require('express');
const { translateBook } = require('../Controllers/bookController');

const router = express.Router();

router.post('/translate', translateBook);

module.exports = router;
