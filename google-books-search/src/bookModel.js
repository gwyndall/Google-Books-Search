// Require mongoose
var mongoose = require("mongoose");

// Get a reference to the mongoose Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new object
// This is similar to a Sequelize model
var BookSchema = new Schema({
   title: {
    type: String,
    trim: true,
    required: true
  },
   authors: {
    type: string,
    trim: true,
    required: true
  },
   description: {
    type: String,
    trim: true
  },
   image: {
    type: String,
    trim: true
  },
   link: {
    type: String,
    trim: true
  }
});


// This creates our model from the above schema, using mongoose's model method
var Book = mongoose.model("Book", BookSchema);

// Export the Book model
module.exports = Book;