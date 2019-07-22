import React from "react";


class SaveBook extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.

    handleClick = () => {
        const data = this.props.data.volumeInfo;
        const bookLink = this.props.data.selfLink;
        const bookId = this.props.data.id;
        const title = data.title;
        const description = data.description;
        const authors = data.authors;
        const image = data.imageLinks.thumbnail;
        const newBook = {bookId, title, authors, description, bookLink, image};
        console.log(newBook);
        // handleSaveClick(newBook);
        alert("Book Saved! Click on Saved Books to see all saved titles")
    };

    // handleSaveClick = function(e) {
    //   this.setState({saved: true});
    //   const bookData = e;
    //   e.preventDefault();
    //   API.addBookToDB(bookData).then(
    //       (response) => {
    //           console.log(response);
    //       }
    //   ).catch(
    //       (err) => {
    //           console.log(err);
    //       }
    //   );
  // }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Save
        </button>
      );
    }
};

  export default SaveBook