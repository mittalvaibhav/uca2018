var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: String,
    entryDate: String
})

var Books = mongoose.model('bookModel', bookSchema, 'books');
router.get('', (req, res) => {
    console.log(req.body);
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    Books.find({}, function (err, books) {
        if (err) {
            throw err
        } else {
            res.send(books);
        }
    })
    // res.send(books);
});

router.post('/addBook', (req, res) => {
    console.log(`The reuest object is: ${req.body.title}`);
    let book = req.body;
    res.set({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:4200'
    });
    Books.create(book, function (err, book) {
        if (err) {
            console.log("The error is: " + err);
            res.status(400);
            res.send(err);
        } else {
            console.log("The sucess is: " + book);
            res.send(book);
        }
    })
    // res.send(books);
});

router.put('/updateBook/:bookId', (req, res) => {
    var bookId = req.params.bookId;
    var query = {};
    update = { title: "Updated" }
    Books.findOneAndUpdate(query, update, (err, res) => {
        if (err) {
            res.status(500);
            res.send(err);
        } else {
            // res.set('Access-Control-Allow-Origin', 'http://localhost:4200')
            res.send(book);
        }
    });
});

module.exports = router;