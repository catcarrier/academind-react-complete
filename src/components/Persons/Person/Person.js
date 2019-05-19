import React, { Component } from 'react';
import styles from './Person.module.css';
//import { default as uuid } from 'uuid';
//import Aux from '../../hoc/Aux';
import withClass from '../../hoc/withClass';

class Person extends Component {

    render() {
        console.log('[Person.js rendering]');
        return (
            // <div className={styles.Person}>
            //     <p onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>
            //     <input type="text" onChange={this.props.changed} value={this.props.name} />
            // </div>

            <React.Fragment>
                <p onClick={this.props.click}>{this.props.name} is {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
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

export default withClass(Person, styles.Person);