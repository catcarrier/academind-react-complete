import React, { Component } from 'react';
import styles from './App.module.css';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import Validation from '../components/Validation/Validation';
import CharComponent from '../components/Char/Char';

class App extends Component {
  state = {
    persons: [
      { id: '001', name: "Xerxes", age: 32 },
      { id: '002', name: "Cyrus", age: 200 },
      { id: '003', name: "Ozymandias", age: 52 },
    ],
    showPersons: false,
    textValue: ''
  }

  deletePersonHandler = (id) => {
    const updatedPersons = this.state.persons.filter((p) => {
      return p.id !== id;
    });
    this.setState({
      persons: [...updatedPersons]
    });
  }

  nameChangedHandler = (event, id) => {
    const updatedPersons = this.state.persons.map(person => {
      if (person.userId === id) {
        return {
          ...person,
          name: event.target.value
        }
      } else {
        return person
      }
    })
    this.setState({
      persons: [...updatedPersons]
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

  onTextChange = (event) => {
    const newTextValue = event.target.value;
    this.setState({
      textValue: newTextValue
    })
  }

  onRemoveLetter = (index) => {
    const textValues = this.state.textValue.split('');
    textValues.splice(index, 1);
    this.setState({
      textValue: textValues.join('')
    })
  }

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }

    let charComponents = (
      <div>
        {
          this.state.textValue.split('').map((letter, index) => {
            return <CharComponent key={index} index={index} click={this.onRemoveLetter} value={letter} />
          })
        }
      </div>
    );



    return (
      <div className={styles.App}>
        <Cockpit
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
        <hr />
        <input type="text" onChange={(event) => this.onTextChange(event)} value={this.state.textValue} />
        <p>{this.state.textValue}</p>
        <Validation textLength={this.state.textValue.length} />
        {charComponents}
      </div>
    );
  }

}

export default App;
