/*
 * req.session.msg: message to user
 * req.session.user: current user
 * req.session.cid: if current user has enter a private contest before,
 *   remember it, no need to wirte password again
 */

module.exports = function(app) {

  app.use('/', require('./home'));
  app.use('/reg', require('./reg'));
  app.use('/login', require('./login'));

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handlers

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500);
      res.render('error', {
        message: err.message,
        error: err,
        layout: "false"
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: {},
      layout: "false"
    });
  });

};