//import React from 'react';

// A workaround that lets you create a component without
// having to return a single root element. This component
// output nothing of its own, only what you pass to it.
//  
//    return (
//       <Aux>
//         <p>Some thing</p>
//         <SomeOtherThing/>
//       </Aux>
//     )
//
// Note that we do not need React, as there is no jsx.
//
// React provides this same functionality as React.Fragment.

const aux = props => props.children;

export default aux;