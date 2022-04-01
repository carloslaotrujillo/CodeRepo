// The typeof operator returns a string indicating the type of the unevaluated operand.

console.log(typeof 42);
// expected output: "number"

console.log(typeof "blubber");
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"

console.log(typeof function () {});
// expected output: "function"

// Gotchas: All not primitives will return "object", you will need to check what type of object is by using a prototype function instead
