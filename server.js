var express = require('express');
var app = express();

var postsend = require('./api/postsend')
var getsend = require('./api/getsend')
var sqlreqres = require('./api/introduce')
var cyhpreinterview = require('./api/cyhpreinterview')


app.use('/postsend' , postsend) 
app.use('/getsend' , getsend)
app.use('/sqlreares' , sqlreqres)
app.use('/cyhpreinterview' ,cyhpreinterview)

app.set('port' , 5000)
app.get('/' , (req , res) => {
    res.send(' / 루트');
})
app.listen(app.get('port'), () => {
    console.log('콘솔확인')
})



