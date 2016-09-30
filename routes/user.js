var express = require('express');
var router = express.Router();
router.get('/sign_up',function(req,res){
    res.render('user/sign_up',{title:'用户注册'});
});
router.get('/sign_in',function(req,res){
    res.render('user/sign_in',{title:'用户登录'});
});
router.get('/sign_out',function(req,res){
    res.redirect('/');
});

module.exports = router;