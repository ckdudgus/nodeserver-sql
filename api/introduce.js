var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./db/config.js');
const router = require('./postsend.js');
var connection = mysql.createConnection(dbconfig); 

var roouter = express.Router();


router.get('/introduce' , (req , res) => {
    connection.query(
        'select * from reactinterview.interview',
        (error , result) => {
            if(error) throw error;
            console.log(result);
            res.send(result);
        }
    )
})

module.exports = router;