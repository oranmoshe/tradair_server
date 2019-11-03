'user strict';

var mysql = require('mysql');

//local mysql db connection
var connection = mysql.createConnection({
    host     : '63.33.172.234',
    port: '3554',
    user     : 'guest',
    password : 'GHE3FJU',
    database : 'tradair'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;