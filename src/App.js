import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Company Roster</h1>
        <Person name="Mark" />
        <Person name="Joe">I love the company</Person>
        <Person name="Sarah" />
      </div>
    );
  }
}

export default App;
