var router = require('express').Router();
var User = require('../models/user');
var Post = require('../models/post');

router.get('/:user', function(req, res) {
  User.get(req.params.user, function(err, user) {
    if(!user) {
      req.flash('error', '用户不存在');
      return res.redirect('/');
    }
    Post.get(user.name, function(err, posts) {
      if(err) {
        req.flash('error', '获取信息错误');
        return res.redirect('/');
      }
      res.render('user', {
        title: user.name,
        posts: posts
      });
    });
  });
});

module.exports = router;
