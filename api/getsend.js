var express = require('express');
var router = express.Router();

router.get('/' , (req , res , next) => {
    res.send("그냥 가벼운 데이터 /차영현")
})

module.exports = router