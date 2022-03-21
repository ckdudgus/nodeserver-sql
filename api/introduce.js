var express = require('express');
var mysql = require('mysql');
var dbconfig = require('../db/config.js');

var connection = mysql.createConnection(dbconfig); 

var router = express.Router();

router.use(express.urlencoded({ extended : true}))


router.get('/introduce' , (req , res) => {
    connection.query(
        'select * from cyh_preinterview.cyh_interview_new',
        (error , result) => {
            if(error) throw error;
            console.log(result);
            res.send(result);
        }
    )
})

module.exports = router;