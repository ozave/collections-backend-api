var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');
var Collection = require('../models/Collection.js');

/* GET /collections listing. */
router.get('/', function(req, res, next) {
  Collection.find(function (err, collections) {
    if (err) return next(err);
    res.json(collections);
  });
});

/* POST /collections listing. */
router.post('/', function(req, res, next) {
  Collection.create(req.body, function (err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
});

/* GET /collections/:order_no */
router.get('/:order_no', function(req, res, next) {
  var order_no_val = '' + req.params.order_no;
  Collection.find({order_no: order_no_val}, function (err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
});

/* Update collection status */
router.put('/:order_no', function(req, res, next) {
  var order_no_val = '' + req.params.order_no;
  var status_val = '' + req.query.status;
  Collection.findOneAndUpdate({order_no: order_no_val}, {status: status_val}, function (err, collection) {
    if (err) return next(err);
    res.json(collection);
  });
});

module.exports = router;