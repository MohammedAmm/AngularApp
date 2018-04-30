var mongoose=require('mongoose');

var BookSchema=mongoose.Schema({
    isbn: String,
    title: String,
    author: String,
    description: String,
    published_year:String,
    publisher: String,
    update_date: {type: Date, default:Date.now}

});

module.exports = mongoose.model('Book', BookSchema);