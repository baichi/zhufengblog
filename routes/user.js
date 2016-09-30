var express = require('express');
var router = express.Router();
router.get('/sign_up',function(req,res){
    res.send('注册');
});
router.get('/sign_in',function(req,res){
    res.send('登录');
});
router.get('/sign_out',function(req,res){
    res.send('退出');
});

module.exports = router;