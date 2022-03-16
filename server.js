var express = require('express');
var mysql = require('mysql');
var dbconfig = require('./db/config.js');
//dbconfig는 실행문이라기보다 정보만 있는 모둘이라서 뒤에 .js라는 확장자를 넣어두어서 보기 쉽게 해둔다
var connection = mysql.createConnection(dbconfig);

var app = express(); 
var time = new Date();

var postsend = require('./api/postsend')
var getsend = require('./api/getsend')

app.set('port' , 5000)
app.get('/' , (req , res) => {
    res.send(' / 루트');
})
app.get('/introduce' , (req , res) => {
    connection.query(
        'select * from reactinterview.interview',
        (error , rows) => {
            if(error) throw error;
            console.log(rows);
            res.send(rows);
        }
    )
})


app.use('/postsend' , postsend) 
app.use('/getsend' , getsend)

app.listen(app.get('port'), () => {
    console.log(time +'콘솔확인')
})


