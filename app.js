var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
const genre = require('./models/genre');

app.use(bodyParser.json());

Genre = require('./models/genre');
Book = require('./models/book');
// connect to mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', function(req,res){
	res.send('Please use /api/books or /api/genres');
});


app.get('/api/genres', function(req, res) {
  Genre.getGenres(10) // example limit
    .then(genres => res.json(genres))
    .catch(err => res.status(500).send(err.message));
});

app.post('/api/genres', function(req, res) {
  var genre = req.body; // for post
  Genre.addGenre(genre) 
    .then(genre => res.json(genre))
    .catch(err => res.status(500).send(err.message));
});

app.put('/api/genres/:_id', function(req, res) {
  var id = req.params._id;
  var genre = req.body; 
  Genre.updateGenre(id,genre, {}) 
    .then(genre => res.json(genre))
    .catch(err => res.status(500).send(err.message));
});

app.delete('/api/genres/:_id', function(req, res) {
  var id = req.params._id;
  Genre.deleteGenre(id) 
    .then(genre => res.json(genre))
    .catch(err => res.status(500).send(err.message));
});

app.get('/api/books', function(req, res) {
  Book.getBooks(10) 
    .then(books => res.json(books))
    .catch(err => res.status(500).send(err.message));
});

app.get('/api/books/:_id', function(req, res) {
  Book.getBookById(req.params._id)
    .then(book => res.json(book))
    .catch(err => res.status(500).send(err.message));
});

app.post('/api/books', function(req, res) {
  var book = req.body;
  Book.addBook(book) 
    .then(book => res.json(book))
    .catch(err => res.status(500).send(err.message));
});

app.put('/api/books/:_id', function(req, res) {
  var id = req.params._id;
  var book = req.body;
  Book.updateBook(id,book, {}) 
    .then(book => res.json(book))
    .catch(err => res.status(500).send(err.message));
});

app.delete('/api/books/:_id', function(req,res){
  var id = req.params._id;
  Book.deleteBook(id)
    .then(book => res.json(book))
    .catch(err => res.status(500).send(err.message));
});


app.listen(3000);
console.log('running on port 3000...');