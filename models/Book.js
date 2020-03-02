const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  book_title: {
    type: String
  },
  course_name: {
    type: String
  },
  professor: {
    type: String
  },
  quarter: {
    type: String
  },
  type: {
    type: String
  },
  link: {
    type: String
  }
});

module.exports = Book = mongoose.model('book', BookSchema);