import React, {useState, useEffect} from 'react';

// The Effect Hook lets you perform side effects in function components.
// Data fetching, setting up a subscription, and manually changing the DOM 
// in React components are all examples of side effects. Whether or not you’re 
// used to calling these operations “side effects” (or just “effects”), you’ve 
// likely performed them in your components before.

// What does useEffect do? By using this Hook, you tell React that your component
// needs to do something after render. React will remember the function you passed 
// (we’ll refer to it as our “effect”), and call it later after performing the DOM updates.
// We could set the document title, perform data fetching or call some other API.

// Why is useEffect called inside a component? Placing useEffect inside the component lets us access
// the state variables (or any props) right from the effect. We don’t need a special API to read it — it’s 
// already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific 
// APIs where JavaScript already provides a solution.

// Does useEffect run after every render? Yes! By default, it runs both after the first render and after 
// every update. Instead of thinking in terms of “mounting” and “updating”, you might find it easier to 
// think that effects happen “after render”. React guarantees the DOM has been updated by the time it runs
// the effects.

function TheUseEffectHook() {

    const[name, setName] = useState("Bob");
    const[last, setLast] = useState("Builder");

    useEffect(() => {
        console.log(name);
        console.log(last);
    }, [name, last]); // Second argument is the dependency array   
  
    return <>
        <h3>Name of actor: {name} {last}</h3>

        <button onClick={() => setName("Bobby")}>Name Nickname</button>
        <button onClick={() => setName("Bob")}>Original Name</button>

        <div style={{margin: '16px'}}></div>
        
        <button onClick={() => setLast("B")}>Last Nickname</button>
        <button onClick={() => setLast("Builder")}>Original Last</button>
    </>;
}

export default TheUseEffectHook;
