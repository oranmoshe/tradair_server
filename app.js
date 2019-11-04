const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', routes);
app.use('/view', express.static('public/dist/tradair-client/index.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
