var mongoose = require('mongoose');

// genre schema
var genreSchema = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	create_date: {
		type: Date,
		default: Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre',genreSchema); // module.exports- for Genre object to be accessed from outside

module.exports.getGenres = function(limit) {
  return Genre.find().limit(limit).exec();
};

//add genres
module.exports.addGenre = function(genre) {
  return Genre.create(genre);
};

//update Genre
module.exports.updateGenre = function(id, genre, options) {
	var query = {_id:id};
	var Update = {
		name: genre.name
	};

  return Genre.findOneAndUpdate(query, Update, options);
};

//delete Genre
module.exports.deleteGenre = function(id) {
	var query = {_id:id};

  return Genre.findByIdAndDelete(query);
};