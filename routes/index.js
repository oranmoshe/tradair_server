// Main router entry point, sets up all route modules

const express = require('express');
const router = express.Router();
const currencyRouter = require('./currencyRouter');
const indexRouter = require('./indexRouter');
const _app_folder = 'public/dist/tradair-client';

router.use('/api/currencies', currencyRouter);

router.get('*.*', express.static(_app_folder, {maxAge: '1y'}));
router.use('/view', express.static( _app_folder+'/index.html'))



module.exports = router;