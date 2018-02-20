import React, { Component } from 'react';
import Person from './Person/Person'
import './App.css';

class App extends Component {
  state = {
    people: [
      {name: 'Jack', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
      {name: 'Ethan', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
      {name: 'Michael', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)}
    ]
  }

  nameChangeHandler = () => {
    this.setState({
      people: [
        {name: 'Braden', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
        {name: 'Josh', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
        {name: 'Kevin', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Company Roster</h1>
        <button onClick={this.nameChangeHandler}>Change Names</button>
        <Person name={this.state.people[0].name} yearsAtCompany={this.state.people[0].yearsAtCompany} />
        <Person name={this.state.people[1].name} yearsAtCompany={this.state.people[1].yearsAtCompany}>Currently on leave.</Person>
        <Person name={this.state.people[2].name} yearsAtCompany={this.state.people[2].yearsAtCompany} />
      </div>
    );
  }
}

export default App;
