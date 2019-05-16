import React from 'react';
import styles from './Person.module.css';

const person = (props) => {

    return (
        <div className={styles.Person}>
            <p onClick={props.click}>{props.name} is {props.age} years old.</p>
            <input type="text" onChange={props.changed} value={props.name} />

        </div>
    )
}

export default person;