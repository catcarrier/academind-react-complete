import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: "Xerxes", age: 32 },
      { id: '002', name: "Cyrus", age: 200 },
      { id: '003', name: "Ozymandias", age: 52 },
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 21 },
  //       { name: "Manu", age: 22 },
  //       { name: "Stephanie", age: 23 }
  //     ]
  //   });
  // }

  deletePersonHandler = (id) => {
    const updatedPersons = this.state.persons.filter( (p) => {
      return p.id !== id;
    });
    this.setState({
      persons: [...updatedPersons]
    });
  }

  nameChangedHandler = (event, id) => {
    const updatedPersons = this.state.persons.map(person => {
      if(person.id === id) {
        return {
          ...person,
          name: event.target.value
        }
      } else {
        return person
      }
    })
    this.setState({
      persons: [ ...updatedPersons ]
    })
  }

  reversePersonsHandler = () => {
    this.setState(state => ({
      ...state,
      persons: state.persons.reverse()
    }));
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(state => ({
      showPersons: !doesShow
    }));
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8x',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) persons = (
      <div>
        {
          this.state.persons.map((p) => {
            return <Person
              key={p.id}
              name={p.name}
              age={p.age}
              click={() => this.deletePersonHandler(p.id)}
              changed={(event) => this.nameChangedHandler(event, p.id)}
            />
          })
        }
      </div>
    );

    return (
      <div className="App">
        <h1>Hi there</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }

}

export default App;
