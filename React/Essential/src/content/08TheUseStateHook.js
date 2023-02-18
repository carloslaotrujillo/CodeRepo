import React, {useState} from 'react';

function TheUseStateHook() {

  // Hooks are functions that let you “hook into” React state and lifecycle features 
  // from function components. Hooks don’t work inside classes — they let you use React
  // without classes.
  
  // useState is a Hook that we call it inside a function component to add some 
  // local state to it. React will preserve this state between re-renders. 
  // useState returns a pair: the current state value and a function that lets 
  // you update it. You can call this function from an event handler or somewhere else.

  console.log(useState()); // [undefined, f()]

  // We can set and assign to a variable the initial state and the function that will
  // set the state using array destructuring.

  const[name, setName] = useState("Carlos Trujillo");
  console.log(name);    // Carlos Trujillo 
  console.log(setName); // function dispatchAction(fiber, queue, action {...})

  return <>
      <h3>Name of coder: {name}</h3>
      <button onClick={() => setName("Carly")}>Change to Nickname</button>
      <button onClick={() => setName("Carlos Trujillo")}>Change to Full Name</button>
  </>;
}

export default TheUseStateHook;
