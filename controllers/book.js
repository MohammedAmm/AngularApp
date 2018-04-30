var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/Book.js');
/*Get All books */
router.get('/', (req, resp, next) => {
  Book.find((err,books) => {
    if (err) return next(err);
    resp.json(books);
  }
)
});
/* GET SINGLE BOOK BY ID */
router.get('/:id', function(req, res, next) {
  Book.findById(req.params.id, function (err, book) {
    if (err) return next(err);
    res.json(book);
  });
});

/* SAVE BOOK */
router.post('/', function(req, res, next) {
  Book.create(req.body, function (err, book) {
    if (err) return next(err);
    res.json(book);
  });
});

/* UPDATE BOOK */
router.put('/:id', function(req, res, next) {
  console.log(req.req.body);
  Book.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE BOOK */
router.delete('/:id', function(req, res, next) {
  Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


module.exports = router;