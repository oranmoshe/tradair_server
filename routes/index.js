// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();

const indexRouter = require('./indexRouter');
const currencyRouter = require('./currencyRouter');

router.use('/', indexRouter);
router.use('/currencies', currencyRouter);

module.exports = router;