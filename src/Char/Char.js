import React from 'react';

const charcomponent = (props) => {

    const style = {
        display: 'inline-block',
        padding: '16px',
        textAlign: 'center',
        margin: '16px',
        border: '1px solid black'
    };

    return (
        <input type="text" style={style} onClick={() => props.click(props.index)} value={props.value}/>
    );

}

export default charcomponent;