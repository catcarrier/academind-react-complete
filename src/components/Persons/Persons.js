import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
    console.log('[Persons.js rendering]');

    return props.persons.map((p) => {
        return ( <Person
            key={p.id}
            name={p.name}
            age={p.age}
            click={() => props.clicked(p.id)}
            changed={(event) => props.changed(event, p.id)} />
        );
    });

}

export default persons;