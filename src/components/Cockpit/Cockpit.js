import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../context/auth-context';
import styles from './Cockpit.module.css';

const cockpit = (props) => {
    
    const toggleButtonRef = useRef(null);

    // Class-based components get access to context through:
    //  -- React.createContext, as exposed by our <AuthContext>
    //  -- static contextType
    //
    // Functional components get access to context through:
    //  -- useContext hook
    //
    // The hook provides access to the context set up by the nearest
    // upstream AuthContext.Provider (see App.js)
    const authContext = useContext(AuthContext);

    console.log("Cockpit context.authenticated", authContext.authenticated);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // mimic an async request
        // const timer = setTimeout(() => {
        //     alert('saved the result');
        // }, 1000)

        toggleButtonRef.current.click();

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
                ref={toggleButtonRef}
                className={btnClass}
                onClick={props.clicked}>Toggle Persons</button>

            { /* Login handler as exposed by context, using <AuthContext> */ }
            {/* <AuthContext.Consumer>
                {context => 
                    context.authenticated ? null :<button onClick={context.login}>Log in</button>
                }
            </AuthContext.Consumer> */}

            { /* Using useContext hook */ }
            { authContext.authenticated ? null :<button onClick={authContext.login}>Log in already!</button> }

        </div>

    );
}

// prevent unnecessary re-renders, for functional components
export default React.memo(cockpit);
