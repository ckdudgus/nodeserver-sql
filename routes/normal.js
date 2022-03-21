// botable에 대한 응답을 해줄 수 없는 경우 출력될 페이지

var express = require('express');
var router = express.Router();

router.get('/' , (req , res , next) => {
    res.send("죄송 요청 주소에 대한 데이터 없음.^^")
})

module.exports = router