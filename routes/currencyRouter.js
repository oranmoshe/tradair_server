// All /currency routes

const express = require('express');
const router = express.Router();
var cors = require('cors')
var whitelist = ['http://localhost:4200']
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

const { getAllCurrencies } = require('../controllers/currenciesController');
const { getMockCurrencies } = require('../controllers/currenciesController');



// Note: this route is actually /albums due to our index.js setup
router.get('/',cors(whitelist), getAllCurrencies);
router.get('/mock',cors(whitelist), getMockCurrencies);

module.exports = router;