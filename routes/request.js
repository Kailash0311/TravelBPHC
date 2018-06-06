var express = require('express');
var router = express.Router();
var fq = require('fuzzquire');
var requestsModel = fq('schemas/request');

var mongoose = require('mongoose');
var db = require('../mongoose');
router.post('/', function (req, res) { 
    requestsModel.create({ 
        planid: req.body.planid,
        username: req.body.username
    }, function (err, result) {
        if (err) {
            console.log("Error");
        } else {
            console.log("Added a Request into database with planid " + req.body.planid + " and username: " + req.body.username)
        }
    });
});

module.exports = router;