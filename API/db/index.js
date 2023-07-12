const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'dzy19940416',
    database : 'reactWebDemo',
    port: '3306'
});

module.exports = connection
