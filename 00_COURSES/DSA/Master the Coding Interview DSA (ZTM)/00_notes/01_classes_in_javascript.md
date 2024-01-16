# Classes in JavaScript
- Primitive Types are passed by value
- Objects are passed by referenceence

## Primitives
- Strings
- Numbers
- Booleans
- Undefined
- Null
- Symbols (ES6)
- BigInt (ES2020)

## Objects
- Arrays
- Functions
- Objects

# High Order Functions
- Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher- order functions.
- map
- filter
- reduce
- sort
- forEach
- find
- every
- some
- flat
- flatMap
- from
- of
- includes
- keys
- ...

## Context vs Scope
### Scope: Determines the accessibility of variables, functions, and objects at various parts of your code during runtime. Is primarily a compile- time concept, referring to the visibility of variables and functions in different parts of your code.

- Global Scope: Variables or functions declared in the global scope are accessible from anywhere in your code.
- Local Scope: Variables or functions declared within a function are only accessible within that function and not outside of it. This is also known as function scope.
- Block Scope: With the introduction of `let` and `const` in ES6, variables declared inside a block `{}` are only accessible within that block. This doesn't apply to variables declared with `var`, which are function- scoped.

### Context: In JavaScript is most often determined by how a function is invoked, and it generally refers to the value of `this` within that function. Context is more about the relationship of functions with objects and how they are invoked. Context can be determined without any code being executed, whereas scope can't be determined until code is executed.

### The `this` keyword in JavaScript can refer to different objects depending on how a function is called:

- Global Context: If a function is called in the global scope, `this` refers to the global object (`window` in a web browser, `global` in Node.js).
- Function Context: Inside a regulra function, the value `this` depends on how the function is called:
    - If a function is called as a method of an object, `this` refers to the object itself.
    - If a function is called as a standalone function, or within another function, `this` refers to the global object. In strict mode, `this` will be `undefined` instead of the global object. 
- Constructor Context: When a function is used as a constructor (using the `new` keyword), `this` refers to the newly created instance.
- Arrow Functions: Aroow functions dont have their own `this` context, they always retain the `this` value of the enclosing scope.
- Explicit Context: JavaScript provides methods like `.call()`, `.apply()`, and `.bind()` to set the context (`this` value) explicitly.
- Event Handlers: When a function is called from an event handler, `this` refers to the HTML element that received the event, although this can differ on hiow the handler is attached.

## Closures
    
  - A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
  - A closure gives you access to an outer function’s scope from an inner function.
  - In JavaScript, closures are created every time a function is created, at function creation time.
  - To use a closure, simply define a function inside another function and expose it.
  - To expose a function, return it or pass it to another function.
  - The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
  - The inner function will have access to the arguments of the outer function, even after the outer function has returned.
  - The inner function will have access to the variables in the outer function scope, even after the outer function has returned.
  - The inner function will have access to the arguments of the outer function, even after the outer function has returned.

## Currying
  -  Currying is a technique of evaluating function with multiple arguments, into sequence of function with single argument.
  -  In other words, when a function, instead of taking all arguments at one time, takes the first one and return a new function that takes the second one and returns a new function which takes the third one, and so forth, until all arguments have been fulfilled.
  -  Currying is a way of constructing functions that allows partial application of a function’s arguments.

## Memoization
 -  Memoization is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
 -  Memoization is a specific form of caching that involves caching the return value of a function based on its parameters.
 -  Memoization is a programming technique which attempts to increase a function’s performance by caching its previously computed results.
 -  Memoization is a form of caching where the return value of a function is cached based on its parameters.

## Composition
 -  Composition is the act of combining multiple functions to create a new function.
 -  Composition is the process of combining two or more functions to produce a new function.


    
    
