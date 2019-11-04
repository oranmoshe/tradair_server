// client
const express = require('express');
const router = express.Router();
const _app_folder = 'public/dist/tradair-client';

router.get('*.*', express.static(_app_folder, {maxAge: '1y'}));
router.use('/', express.static('public/dist/tradair-client/index.html'))

module.exports = router;