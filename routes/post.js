var router = require('express').Router();
var User = require('../models/user');
var Post = require('../models/post');

router.post('/', function(req, res) {
  if(!req.session.user) {
    req.flash('error','未登录');
    return res.redirect('/');
  }

  var currentUser = req.session.user;
  var post = new Post(currentUser.name, req.body.post);
  post.save(function(err) {
    if(err) {
      req.flash('error', '发布时遇到未知错误');
      return res.redirect('/');
    }
    req.flash('success', '发布成功');
    res.redirect('/u/' + currentUser.name);
  });
});

module.exports = router
