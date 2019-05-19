import React, { useEffect } from 'react';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // mimic an async request
        const timer = setTimeout(() => {
            alert('saved the result');
        }, 1000)

        return () => { 
            //clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work');
         }
    }, []); // re-run only if the listed dependencies (none in this case) have changed

    const classes = [];
    if (props.personsLength <= 2) {
        classes.push(styles.red);
    }
    if (props.personsLength <= 1) {
        classes.push(styles.bold);
    }

    let btnClass = '';
    if (props.showPersons) {
        btnClass = styles.Red
    }

    return (
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>
            <p className={classes.join(' ')}>Someone set us up the bomb</p>
            <button
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>
        </div>

    );
}

// prevent unnecessary re-renders, for functional components
export default React.memo(cockpit);
