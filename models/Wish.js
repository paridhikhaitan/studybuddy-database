const mongoose = require('mongoose')

const WishSchema = new mongoose.Schema({
    book_title:{
        type: String
    },
    course_name:{
        type: String
    }, 
    type:{
        type: String
    }
});

module.exports = Wish = mongoose.model('wish', WishSchema)