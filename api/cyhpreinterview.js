var express = require('express');
var mysql = require('mysql');
var dbconfig = require('../db/config.js');
// const router = require('./postsend.js');

// var connection = mysql.createConnection(dbconfig);
var pool = mysql.createPool(dbconfig); // 6번을 7번으로 수정

// 데이터 베이스에 연결된 connection을 미리 만들어 둔 후 pool에 보관하였다가 필요할때
// pool에서 connection을 가져다 사용한 후 다시 pool에 변환하는 기법이다

var router = express.Router();

router.use(express.urlencoded({ extended : true}))

router.get('/' , (req , res , next) => {
    

    var botable = req.query.botable;
    var crud = 'select'
    // ~~~~?botable=cyh_interview_new
    // 리액트에서 주소요청
    switch(botable){ // 워크밴치의 스키마.테이브
        case "cyh_preinterview.cyh_interview_new":
            crud = 'select';
            break;
        // case "cyh_preinterview.cyh_contact_new":
        //     crud = 'insert into';
        //     break;
        // case "cyh_preinterview.cyh_portfolio_new":
        //     crud = 'insert';
        //     break;         
        default:
            botable = 'none';
            crud = '';
            break;    
    }



    if(botable !== 'none'){
        pool.getConnection(function(err , connection) {    
            connection.query(
                crud + ' * from ' +botable,
                (error , result) => {
                    if(error) throw error;
                    console.log(result);
                    res.send(result);
                })
            connection.release(); // 추가 구절
        })
    }else{ // botable이 없는 경우
        var accident = require('../routes/normal')
        router.use('/' , accident) // 라우팅생성
        // next에 res를 출력하게 페이지분배
        next('route')
    }

})


module.exports = router;