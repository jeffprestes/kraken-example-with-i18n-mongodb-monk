/*global describe:false, it:false, beforeEach:false, afterEach:false*/

'use strict';


var kraken = require('kraken-js'),
    express = require('express'),
    path = require('path'),
    request = require('supertest'),
    mongo = require('mongodb'),
    monk = require('monk'),
    db = monk('localhost:27017/test');


describe('users', function () {

    var app, mock;


    beforeEach(function (done) {
        app = express();
        app.on('start', done);
        app.use(kraken({
            basedir: path.resolve(__dirname, '..')
        }));

        app.use(function(req, res, next)  {
          req.db = db;
          next();
        });

        var collection = db.get('usercollection');
        collection.insert({"username": "testuser", "email": "test@test.com"});
        mock = app.listen(1337);

    });


    afterEach(function (done) {
        var collection = db.get('usercollection');
        collection.remove({"username": "testuser", "email": "test@test.com"});
        db.close();
        mock.close(done);
    });


    it('should say "testuser"', function (done) {
        request(mock)
            .get('/users')
            .expect(200)
            .expect('Content-Type', /html/)
            .expect(/testuser/)

            .end(function (err, res) {
                done(err);
            });
    });



});
