const mysql = require('mysql');

const connection = mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'dzy19940416',
    // database 本地环境: reactWebDemo  线上环境：reactwebdemo
    database : 'reactWebDemo',
    port: '3306'
});

module.exports = connection
