import React, { Component } from 'react';
import styles from './Person.module.css';

class Person extends Component {

    render() {
        console.log('[Persons.js rendering]');
        return (
        <div className={styles.Person}>
            <p onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>
            <input type="text" onChange={this.props.changed} value={this.props.name} />
        </div>
    )}
    
}

export default Person;