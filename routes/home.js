var router = require('express').Router();

router.get('/', function(req, res){
  res.render('home', {
    title: '主页'
  });
});

module.exports = router;