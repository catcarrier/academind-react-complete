import React, { Component } from 'react';
import styles from './Person.module.css';
//import { default as uuid } from 'uuid';
//import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';
import PropTypes from 'prop-types';
import AuthContext from '../../context/auth-context';

class Person extends Component {

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef(); // 1. create a ref...
    }

    // static contextType is available in class-based components.
    // -- allows access to the context outside an <AuthContext> component,
    //    such as in lifecycle functions.
    // -- must be named contextType
    // -- must be static
    // -- adds a property named context to the component
    //
    // see componentDidMount for example.
    //
    // For functional components, options are: 
    // -- <AuthContext>
    // -- useContext hook
    static contextType = AuthContext;

    componentDidMount() {
        this.inputElementRef.current.focus(); // 3. focus on the input

        // context is made available through static contextType, above
        console.log(this.context);
    }

    render() {
        console.log('[Person.js rendering]');
        return (
            <React.Fragment>

                { /* using AuthContext.Consumer */ }
                {/* <AuthContext.Consumer>
                    {context => 
                        context.authenticated ? <p>Authenticated</p> : <p>Please log in</p>
                    }
                </AuthContext.Consumer> */}

                {/* Another way, this time using context exposed by static contextType */}
                { this.context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> }

                <p onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input
                    type="text"
                    ref = {this.inputElementRef} // 2. assign the ref to this input

                    // An older, functional way of assigning focus. Follow this
                    // up by calling this.inputElement.focus() in DidMount
                    // ref={(elem) => {this.inputElement = elem}} 
                    onChange={this.props.changed}
                    value={this.props.name} />
            </React.Fragment>
        )

        // It is sometimes not convenient to return a root element (ex: div)
        // from your component, as this can complicate up the markup.
        // THere are two ways around this:

        // Method 1: Return an array.
        //
        // Note the comma delimiters.
        // Note the key property we add to each element; without this we will
        // get a warning in the console.
        // Note that by doing this we lose the styling attached to the enclosing div.
        //
        // return [
        //     <p key={uuid()} onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>,
        //     <p key={uuid()}>{this.props.children}</p>,
        //     <input key={uuid()} type="text" onChange={this.props.changed} value={this.props.name} />
        // ]

        // Method 2: Use a wrapping component that returns only its children.
        // Note that we do not need to add keys here as with method 1.
        // return (
        //     <Aux>
        //         <p onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>
        //         <p>{this.props.children}</p>
        //         <input key={uuid()} type="text" onChange={this.props.changed} value={this.props.name} />
        //     </Aux>
        // )

    }

}

Person.propTypes = {
    click: PropTypes.func,
    changed: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number
};

export default withClass(Person, styles.Person);