var express = require('express');
var router = express.Router();

router.post('/' , (req , res , next) => {
    res.send({
        'postdbtitle' : 'title',
        'postdbtitle2' : 'subtitle',
        'key' : 'value' 
    })
})

module.exports = router 