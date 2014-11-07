var router = require('express').Router();

router.get('/', function(req, res) {
  if(!req.session.user) {
    req.flash('error','未登录');
    return res.redirect('/');
  }

  req.session.user = null;
  req.flash('success', '登出成功');
  res.redirect('/');
});

module.exports = router;
