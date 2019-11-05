const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const currencyRouter = require('./routes/currencyRouter');

app.use('/', routes)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
