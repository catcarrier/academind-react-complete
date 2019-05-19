import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {

    // rem this out as we have no state
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons] getDerivedStateFromProps');
    //     return state;
    // }

    // deprecated
    // componentWillReceiveProps(props) {
    //     console.log('[Persons] componentWillReceiveProps', props);
    // }


    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons] shouldComponentUpdate');
        return nextProps.persons !== this.props.persons;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons] getSnapshotBeforeUpdate');
        return {message: "What you say?"};
    }

    componentWillUnmount() {
        console.log('[Persons.js componentWillUnmount]');
    }

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

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js componentDidUpdate]');
        console.log(snapshot);
    }

}

export default Persons;