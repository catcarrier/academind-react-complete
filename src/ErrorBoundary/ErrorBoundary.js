import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        hasError: false,
        errorMessage: ''
    }

    componentDidCatch = (error, info) => {
        this.setState({
            hasError: true,
            errorMessage: error
        });
    }

    render() {
        if (this.state.hasError) {
            return <h1>{this.state.errorMessage}</h1>
        } else {
            // usage: If nothing went wrong, return whatever
            //        was wrapped inside the error boundary.
            // return( <ErrorBoundary><SomethingMayGoBoom/></ErrorBoundary> )
            return this.props.children
        }
    }
}

export default ErrorBoundary;