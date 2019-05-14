import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// App component as a function, using hooks

const app = props => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Xerxes", age: 32 },
      { name: "Cyrus", age: 200 },
      { name: "Ozymandias", age: 52 },
    ],
    monkeys: 265
  })

  
  // state = {
  //   persons: [
  //     {name: "Xerxes", age: 32},
  //     {name: "Cyrus", age: 200},
  //     {name: "Ozymandias", age: 52},
  //   ]
  // }

  const reversePersonsHandler = () => {
    setPersonsState(personsState => ({
      ...personsState,
      persons: personsState.persons.reverse()
    }));
  }

  console.log(personsState)

  // reversePersonsHandler = () => {
  //   this.setState( state => ({ 
  //     ...state,
  //     persons: state.persons.reverse() 
  //   }) );
  // }

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>Hi there</h1>
  //       <p>Another para</p>
  //       <button onClick={this.reversePersonsHandler}>Switch name</button>
  //       <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
  //       <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
  //       <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
  //     </div>
  //   );
  //   //return React.createElement('div', {className:'App'}, React.createElement('h1', null, 'hi there another element'));
  // }

  return (
    <div className="App">
      <h1>Hi there</h1>
      <p>Another para</p>
      <button onClick={reversePersonsHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );



}

export default app;
