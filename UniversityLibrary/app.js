var express = require('express');
const app = express();
var bodyParser = require('body-parser');
var config = require('./config.json');
var mongoose = require('mongoose');
mongoose.connect(config.connectionString);

app.use(bodyParser.json());
app.use('', express.static('static'));
app.use('/home', express.static('static'));

app.use('', function(req, res, next) {
    middlewareFunction();
    next();
});

var middlewareFunction = function() {
    console.log("Middleware test called");
};

var booksRoute = require('./models/book');
app.use('/books', booksRoute);

app.get('/books/:subject', (req, res) => {
    res.send(books);
});

app.get('/shelves', (req, res) => {
    res.send(books);
});

app.get('/students', (req, res) => {
    res.send(books);
});

app.listen(8000, () => {
    var date = new Date();
    console.log(`Server is listening on port: 8000 and started at time: ${date.getHours()}:${date.getMinutes()}`)
})
