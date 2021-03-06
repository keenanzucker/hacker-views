import React, { Component } from 'react';
import './App.css';

import NewsList from './components/NewsList.jsx';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Hacker Views</h1>
        </header>
        <NewsList />    
        <footer>Built by Keenan using React, the News API, and love!</footer>    
      </div>
    );
  }
}

export default App;
