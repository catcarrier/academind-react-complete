import React, { Component } from 'react';
import Cockpit from '../components/Cockpit/Cockpit';
import Persons from '../components/Persons/Persons';
import { default as uuid } from 'uuid';
import classes from './App.module.css';
import withClass from '../components/hoc/withClass';

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

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js shouldComponentUpdate]', nextProps, nextState);
    return true;
  }

  componentDidUpdate(prevProps) {
    console.log('[App.js componentDidUpdate]', prevProps);
  }

  state = {
    persons: [
      { id: uuid.v1(), name: "Xerxes", age: 32 },
      { id: uuid.v1(), name: "Cyrus", age: 200 },
      { id: uuid.v1(), name: "Ozymandias", age: 52 },
    ],
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    isAuthenticated: false
  }

  deletePersonHandler = (id) => {
    const updatedPersons = this.state.persons.filter((p) => {
      return p.id !== id;
    });
    this.setState({
      persons: [...updatedPersons]
    });
  }

  loginHandler = () => {
    this.setState({
      isAuthenticated: true
    })
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



    // Here the new state depends on a value (changeCounter) from 
    // the prev state. For this to work consistently we use the 
    // arrow-function version of setState, that takes the prevState
    // as its first param, and has an explicit return.
    //
    // Without this precaution, the prev state might not
    // be what we expect -- it might be the state set up by some
    // other event.
    this.setState((prevState, props) => {
      return {
        persons: [...updatedPersons],
        changeCounter: prevState.changeCounter + 1
      }
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
        isAuthenticated={this.state.isAuthenticated}
      />
    }

    return (
      <React.Fragment>
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit</button>
        {this.state.showCockpit ?
          <Cockpit
            title={this.props.title}
            personsLength={this.state.persons.Length}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler}
            login={this.loginHandler}
          />
          : null}
        {persons}
      </React.Fragment>

    );
  }

}

export default withClass(App, classes.App);
