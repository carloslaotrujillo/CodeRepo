import React from 'react';

function Comp1() {
    return <h3>This is Comp1</h3>;
}

function Comp2() {
    return <h3>This is Comp2</h3>;
}

function ConditionalRendering(props) {
    return(
        <>
             {props.auth ? <Comp1 /> : <Comp2 />}
        </>
        )
}

export default ConditionalRendering;
 