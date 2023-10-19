import React from 'react';

// The destructuring assignment syntax is a JavaScript expression that makes it possible 
// to unpack values from arrays, or properties from objects, into distinct variables.

// Array destructuring

/*****/
const [band, genre, year] = ["Metallica", "Trash Metal", "1981"];
console.log(band);  // Metallica 
console.log(genre); // Trash Metal
console.log(year);  // 1981
/*****/

/*****/
const [a, b, ...restOfArray] = [10, 20, 30, 40, 50];
console.log(a);     // 10 
console.log(b);     // 20
console.log(restOfArray);  // [30, 40, 50]
/*****/


// Object destructuring. Is better because we can match the key to destructure the object.  

/*****/
const { i, j } = { i: 10, j: 20 }
console.log(i);      // 10
console.log(j);      // 20
/*****/

/*****/
const { k, l, ...restOfObj } = { k: 10, l: 20, m: 30, n: 40 };
console.log(k);          // 10
console.log(l);          // 20
console.log(restOfObj);  // {m: 30, n: 40}
/*****/

/*****/
const { m } = { k: 10, l: 20, m: 30, n: 40 };
console.log("m is", m);   // m is 30
/*****/

// In React destructuring also can be used on the props object
function DestructuringArraysAndObjects({ props1, props2 }) {  
  return <div>
     <h3>Props1: {props1.pi} is an {props1.type}</h3>
     <h3>Props2: This is {props2}</h3>
    </div>;
}

export default DestructuringArraysAndObjects;
