var mongoose = require('mongoose');
const genre = require('./genre');

// book schema
var bookSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String
    },
    page: {
        type: String
    },
    image_url: {
        type: String
    },
    buy_url: {
        type: String
    },
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book',bookSchema); 

module.exports.getBooks = function(limit) {
  return Book.find().limit(limit).exec();
};

module.exports.getBookById = function(id) {
  return Book.findById(id).exec();
};

//add Books
module.exports.addBook = function(book) {
  return Book.create(book);
};

//update Book
module.exports.updateBook = function(id, book, options) {
	var query = {_id:id};
	var Update = {
		title: book.title,
        genre: book.genre,
        description: book.description,
        author: book.author,
        publisher: book.publisher,
        page: book.page,
        image_url: book.image_url,
        buy_url: book.buy_url
	};

  return Book.findOneAndUpdate(query, Update, options);
};

//delete Book
module.exports.deleteBook = function(id) {
	var query = {_id:id};

  return Book.findByIdAndDelete(query);
};