'use strict';
var pine = require('pine');
var MPromise = require('mpromise');
var logger = pine();

function UserModel () {

}

UserModel.prototype.query = function (req)  {

  var db = req.db;
  var collection = db.get('usercollection');
  var promise = new MPromise();

  collection.find({}, {}, function(err, docs) {
      if (err)  {
        logger.error(err);
        promise.reject(err);
      } else {
        var users = { users: docs };
        promise.fulfill(users);
      }
  });

  return promise;
};

module.exports = UserModel;
  /*
  Example { users :    [ { _id: '55e20885f6e0ad72272f816c',
                        username: 'testuser1',
                        email: 'testuser1@testdomain.com' },
                      { _id: '55e209acf6e0ad72272f816d',
                        username: 'jprestes',
                        email: 'jprestes@paypal.com' }
                    ]
         };
   */
