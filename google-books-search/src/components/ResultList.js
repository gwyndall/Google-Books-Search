import React from "react";
import SaveBook from "./SaveBook"
import ViewBook from "./ViewBook";

function ResultList(props) {
  console.log(props.results);
   return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result.id} id={result.id}>
          <div className="title_buttons">
            <h3>{result.volumeInfo.title}</h3>
            <ViewBook url={result.selfLink}/><SaveBook url={result.selfLink} />
          </div>
          <div className="authorInfo">
            <h4>{result.volumeInfo.authors.join(", ")}</h4>
          </div>
          <div className="aboutBook">
           <img alt={result.volumeInfo.title} className="img-fluid" src={result.volumeInfo.imageLinks.thumbnail} /> 
           <p className="book-description">{result.volumeInfo.description}</p>
          </div>
        </li>
      ))}
    </ul>
  
  );
}

export default ResultList;
