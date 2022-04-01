// The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.

// Old code
function add1(num) {
  console.log(num); // 5
  console.log(Array.prototype.slice.call(arguments)); // [5, 6, 7, 8] Do the job but not very clean
  console.log([].slice.call(arguments)); // [5, 6, 7, 8] Do the job but not very clean
  console.log(Array.from(arguments)); // [5, 6, 7, 8] Do the job but not very clean
}
add1(1, 2, 3, 4, 5);

// New code
function add2(...num) {
  console.log(num); // [6, 7, 8, 9, 10]
}
add2(6, 7, 8, 9, 10);

// Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
function add3(num) {
  const vals = [1, 2, 3, 4, 5, ...num];
  console.log(vals); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}
add3([6, 7, 8, 9, 10]);
