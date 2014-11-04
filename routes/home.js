var router = require('express').Router();

router.get('/', function(req, res){
  res.render('home', {
    title: '主页',
    layout: 'layout'
  });
});

module.exports = router;