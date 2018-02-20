import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hey, this is a REACT app.</h1>
      </div>
    );
  }
}

export default App;

// return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hey, this is a REACT app.'))