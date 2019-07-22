const mongoose = require("mongoose");
const Book = require("../models/Book");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooks"
);

const bookSeed = {
    bookId: "wrOQLV6xB-wC", title: "Harry Potter and the Sorcerer's Stone", 
    authors: ["J.K. Rowling"],
    bookId: "wrOQLV6xB-wC",
    bookLink: "https://www.googleapis.com/books/v1/volumes/wrOQLV6xB-wC",
    description: "",
    image: "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api",
    title: "Harry Potter and the Sorcerer's Stone"
}

const newBook = new Book(bookSeed);
newBook.save( err => {
  console.log(err);
});

