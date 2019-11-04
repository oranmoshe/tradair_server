// All /currency routes
const express = require('express');
const router = express.Router();
const cors = require('cors')
const whitelist = ['http://localhost:4200']

const { getAllCurrencies } = require('../controllers/currenciesController');
const { getMockCurrencies } = require('../controllers/currenciesController');

router.get('/',cors(whitelist), getAllCurrencies);
router.get('/mock',cors(whitelist), getMockCurrencies);

module.exports = router;