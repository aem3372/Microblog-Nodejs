var router = require('express').Router();
var Post = require('../models/post');

router.get('/', function(req, res){
  Post.get(null, function(err, posts) {
    if(err) {
      posts = [];
    }

    res.render('home', {
      title: '主页',
      posts: posts,
      layout: 'layout'
    });
  });
});

module.exports = router;