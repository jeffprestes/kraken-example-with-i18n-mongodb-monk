'use strict';

var AbcModel = require('../models/index');
var UserModel = require('../models/users');
var pine = require('pine');

module.exports = function (router) {

    var logger = pine();

    router.get('/', function (req, res) {
        var model = new AbcModel(req);
        var locale = req.cookies && req.cookies.locale;
         //Set the locality for this response. The template will pick the appropriate bundle
         res.locals.context = {
             locality: locale
         };
        res.render('index', model);
    });

    router.get('/setlocale/:locale', function (req, res)  {
      console.log('Locale: ' + req.params.locale);
      res.cookie('locale', req.params.locale);
      res.redirect('/');
    });

    router.get('/responsivo', function (req, res) {
        var model = new AbcModel(req);
        var locale = req.cookies && req.cookies.locale;
         //Set the locality for this response. The template will pick the appropriate bundle
         res.locals.context = {
             locality: locale
         };
        res.render('responsivo', model);
    });

    router.get('/users', function (req, res)  {
      //var model = new UserModel(req);
      var locale = req.cookies && req.cookies.locale;
       //Set the locality for this response. The template will pick the appropriate bundle
       res.locals.context = {
           locality: locale
       };

       var users = new UserModel();

       users.query(req).then(function (data)  {
         logger.debug(JSON.stringify(data));
         res.render('users', data);
       });

    });

};
