import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    render() {
        console.log('[Persons.js rendering]');
        return this.props.persons.map((p) => {
            return (<Person
                key={p.id}
                name={p.name}
                age={p.age}
                click={() => this.props.clicked(p.id)}
                changed={(event) => this.props.changed(event, p.id)} />
            );
        });
    }


}

export default Persons;