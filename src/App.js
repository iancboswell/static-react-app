import React, { Component } from 'react';
import logo from './noriko.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            トップをねらえ!
          </p>
          <a
            className="App-link"
            href="https://www.youtube.com/watch?v=_wN13cpASsU"
            target="_blank"
            rel="noopener noreferrer"
          >
            Gunbuster!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
