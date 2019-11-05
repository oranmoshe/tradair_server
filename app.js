const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const routes = require('./routes');
const _app_folder = 'public/dist/tradair-client';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('*.*', express.static(_app_folder, {maxAge: '1y'}));
app.use('/view', express.static( _app_folder+'/index.html'))


app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
