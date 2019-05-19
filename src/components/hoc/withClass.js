import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} /> { /* pass the original props into the wrapped component */ }
        </div>
    )
};

export default withClass;