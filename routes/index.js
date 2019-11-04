// Main router entry point, sets up all route modules

const express = require('express');

const router = express.Router();

const currencyRouter = require('./currencyRouter');

router.use('/api/currencies', currencyRouter);

module.exports = router;