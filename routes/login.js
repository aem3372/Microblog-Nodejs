var router = require('express').Router();
var crypto = require('crypto');
var User = require('../models/user');

router.get('/', function(req, res) {
  res.render('login', {
    title: '用户登录',
    layout: 'layout'
  });
});

router.post('/', function(req, res) {
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');

  User.get(req.body.username, function(err, user) {
    if(!user) {
      req.flash('error', '用户不存在');
      return res.redirect('/login');
    }
    if(user.password != password) {
      req.flash('error', '密码错误');
      return res.redirect('/login');
    }
    req.session.user = user;
    req.flash('success', '登录成功');
    res.redirect('/');
  });
});

module.exports = router;
