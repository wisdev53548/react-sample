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

  nameChangeHandler = newName => {
    this.setState({
      people: [
        {name: 'Braden', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
        {name: 'Josh', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
        {name: newName, yearsAtCompany: (Math.floor(Math.random() * 20) + 1)}
      ]
    })
  }

  nameInputHandler = event => {
    this.setState({
      people: [
        {name: 'Braden', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
        {name: event.target.value, yearsAtCompany: (Math.floor(Math.random() * 20) + 1)},
        {name: 'Michael', yearsAtCompany: (Math.floor(Math.random() * 20) + 1)}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Company Roster</h1>
        <button onClick={() => this.nameChangeHandler('The CEO')}>Change Names</button>
        <Person 
          name={this.state.people[0].name} 
          yearsAtCompany={this.state.people[0].yearsAtCompany} />
        <Person 
          name={this.state.people[1].name} 
          yearsAtCompany={this.state.people[1].yearsAtCompany}
          change={this.nameInputHandler}>Currently on leave.</Person>
        <Person 
          name={this.state.people[2].name} 
          yearsAtCompany={this.state.people[2].yearsAtCompany}
          click={this.nameChangeHandler.bind(this, 'Jeremy')} />
      </div>
    );
  }
}

export default App;
