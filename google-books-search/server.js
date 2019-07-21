var express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");

// Our scraping tools
// Axios is a promised-based http library, similar to jQuery's Ajax method
// It works on the client and on the server
var axios = require("axios");


// Require all models
var db = require("./src/models/Book");

var PORT = 3000;

// Initialize Express
var app = express();

// Configure middleware

// Use morgan logger for logging requests
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Make public a static folder
app.use(express.static("public"));

// Connect to the Mongo DB
mongoose.connect("mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Routes
// POST route for saving a new Book to the db 
app.post("/save", function(req, res) {
  // Create a new Book in the database
  db.Book.create(req.body)
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Route for getting all books from the db
app.get("/books", function(req, res) {
  // Using our Book model, "find" every book in our db
  db.Book.find({})
    .then(function(dbBook) {
      // If any Books are found, send them to the client
      console.log(dbBook);
      res.json(dbBook);
    })
    .catch(function(err) {
      // If an error occurs, send it back to the client
      res.json(err);
    });
});

// Start the server
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});
