 import React, {useReducer} from 'react';

// The useReducer hook accepts a reducer of type (state, action) => newState, and returns the 
// current state paired with a dispatch method.

// useReducer is usually preferable to useState when you have complex state logic that involves 
// multiple sub-values or when the next state depends on the previous one. useReducer also lets 
// you optimize performance for components that trigger deep updates because you can pass dispatch 
// down instead of callbacks.

let initialState = 0;

function reducer(state, action) {   
  switch (action) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      throw new Error(); // or we can also return state
  }
}

function Counter() {
  const [counter, counterChange] = useReducer(reducer, initialState);

  return (
    <>
      Count: {counter}
      <button onClick={() => counterChange('decrement')}>-</button>   
      <button onClick={() => counterChange('increment')}>+</button>
    </>
  );
}

export default Counter;
