var express = require('express');
var router = express.Router();
var fq = require('fuzzquire');
var plansModel = fq('schemas/plans');
var planuserModel = fq('schemas/planuser');
var requestsModel = fq('schemas/request');
var usersModel = fq('schemas/user')
/* Returns database by collection */
router.get('/', function (req, res) {
      var plansget = function () {
        return new Promise(function (resolve, reject) {
          plansModel.find({},
            function (err, result) {
              if (err) reject(err)
              else {
                resolve(result)
              }
            }
          )
        })
      }
      var plansuserget = function () {
        return new Promise(function (resolve, reject) {
          planuserModel.find({},
            function (err, result) {
              if (err) reject(err)
              else {
                resolve(result)
              }
            }
          )
        })
      }
      var requestget = function () {
        return new Promise(function (resolve, reject) {
          requestsModel.find({},
            function (err, result) {
              if (err) reject(err)
              else {
                resolve(result)
              }
            }
          )
        })
      }
      var userget = function () {
        return new Promise(function (resolve, reject) {
          usersModel.find({},
            function (err, result) {
              if (err) reject(err)
              else {
                resolve(result);
              }
            })
        })
      }

      Promise.all([plansget(), plansuserget(), requestget(), userget()])
        .then(function (values) {
          res.send(values);
        })
    })
      module.exports = router;