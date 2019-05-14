import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import Validation from './Validation/Validation';
import CharComponent from './Char/Char';

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
      if (person.id === id) {
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
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
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

      
      btnClass = styles.Red
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

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push(styles.red);
    }
    if (this.state.persons.length <= 1) {
      classes.push(styles.bold);
    }

    return (
        <div className={styles.App}>
          <h1>Hi there</h1>
          <p className={classes.join(' ')}>Someone set us up the bomb</p>
          <button
            className={btnClass}
            onClick={this.togglePersonsHandler}>Toggle Persons</button>
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
