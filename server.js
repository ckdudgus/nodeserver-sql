var express = require('express');
var app = express(); 
var time = new Date();

var postsend = require('./api/postsend')
var getsend = require('./api/getsend')

app.set('port' , 5000)
app.get('/' , (req , res) => {
    res.send(' / 루트');
})


app.use('/postsend' , postsend) 
app.use('/getsend' , getsend)

app.listen(app.get('port'), () => {
    console.log(time +'콘솔확인')
})


