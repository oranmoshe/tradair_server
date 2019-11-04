// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();
const currencyRouter = require('./currencyRouter');
const indexRouter = require('./indexRouter');

router.use('/api/currencies', currencyRouter);
router.use('/view',indexRouter)

module.exports = router;