import React from 'react';
import './App.css';
import SearchResultContainer from './components/SearchResultContainer';
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <div className="App-container">
      <Nav />
      <SearchResultContainer />
      </div>
    </div>
  );
}

export default App;
