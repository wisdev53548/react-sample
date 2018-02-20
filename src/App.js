import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    people: [
      {name: 'Jack', age: (Math.floor(Math.random() * 20) + 1)},
      {name: 'Ethan', age: (Math.floor(Math.random() * 20) + 1)},
      {name: 'Michael', age: (Math.floor(Math.random() * 20) + 1)}
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Company Roster</h1>
        <Person name={this.state.people[0].name} age={this.state.people[0].age} />
        <Person name={this.state.people[1].name} age={this.state.people[1].age}>I will be the CEO</Person>
        <Person name={this.state.people[2].name} age={this.state.people[2].age} />
      </div>
    );
  }
}

export default App;
