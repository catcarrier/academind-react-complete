import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import { default as uuid } from 'uuid';

class App extends Component {

  constructor(props) {
    console.log('[App.js constructor]');
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js getDerivedStateFromProps]', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js componentDidMount]');
  }

  state = {
    persons: [
      { id: uuid.v1(), name: "Xerxes", age: 32 },
      { id: uuid.v1(), name: "Cyrus", age: 200 },
      { id: uuid.v1(), name: "Ozymandias", age: 52 },
    ],
    showPersons: false
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

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState(state => ({
      showPersons: !doesShow
    }));
  }

  render() {
    console.log('[App.js render]');

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
      />
    }

    return (
      <div>
        <Cockpit
          title={this.props.title}
          persons={this.state.persons}
          showPersons={this.state.showPersons}
          clicked={this.togglePersonsHandler} />
        {persons}
      </div>
    );
  }

}

export default App;
