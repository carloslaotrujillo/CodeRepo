import React, { useRef } from 'react';

// useRef returns a mutable ref object whose .current property is initialized to the passed 
// argument (initialValue). The returned object will persist for the full lifetime of the component.

// A common use case is to access a child imperatively:

// Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

// You might be familiar with refs primarily as a way to access the DOM. If you pass a ref object
// to React with <div ref={myRef} />, React will set its .current property to the corresponding DOM 
// node whenever that node changes.

// However, useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable 
// value around similar to how you’d use instance fields in classes.
// This works because useRef() creates a plain JavaScript object. The only difference between 
// useRef() and creating a {current: ...} object yourself is that useRef will give you the same 
// ref object on every render.

// Keep in mind that useRef doesn’t notify you when its content changes. Mutating the .current 
// property doesn’t cause a re-render. If you want to run some code when React attaches or detaches 
// a ref to a DOM node, you may want to use a callback ref instead.

function TheUseRefHook() {
  const inputEl = useRef(null);
  
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

export default TheUseRefHook;
