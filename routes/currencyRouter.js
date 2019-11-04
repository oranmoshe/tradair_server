// All /currency routes

const express = require('express');
const router = express.Router();
var cors = require('cors')
var whitelist = ['http://localhost:4200']

const { getAllCurrencies } = require('../controllers/currenciesController');
const { getMockCurrencies } = require('../controllers/currenciesController');

router.get('/',cors(whitelist), getAllCurrencies);
router.get('/mock',cors(whitelist), getMockCurrencies);

module.exports = router;