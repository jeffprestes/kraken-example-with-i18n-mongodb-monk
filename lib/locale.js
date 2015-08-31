'use strict';

module.exports = function() {
  return function (res, req, next)  {

    var locale = req.cookie.locale;
    console.log('Cookies: ' + req.cookies.locale);
    //sss
    //res.locals.context = {
    //  locality: locale
    //};
    next();
  };
};
