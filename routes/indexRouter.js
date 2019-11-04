// All /currency routes

const express = require('express');
const router = express.Router();
var cors = require('cors')
var whitelist = ['http://localhost:4200']
const _app_folder = 'public/dist/tradair-client';

const { getHome } = require('../controllers/indexController');

router.get('*.*', express.static(_app_folder, {maxAge: '1y'}));
router.get('/',cors(whitelist), getHome);

module.exports = router;