// All /currency routes

const express = require('express');
const router = express.Router();

const { getAllCurrencies } = require('../controllers/currenciesController');

// Note: this route is actually /albums due to our index.js setup
router.get('/', getAllCurrencies);

module.exports = router;