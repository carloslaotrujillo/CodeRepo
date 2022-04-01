// An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

// Differences & Limitations:

// Does not have its own bindings to this or super, and should not be used as methods.
// Does not have new.target keyword.
// Not suitable for call, apply and bind methods, which generally rely on establishing a scope.
// Can not be used as constructors.
// Can not use yield, within its body.

// Old code
function example1(param1) {
  return param1 + 1;
}
console.log(example1(9));

// New code
const example2 = (param2) => param2 + 2;
console.log(example2(8));

// New code variant
const example3 = (param3) => {
  return param3 + 3;
};
console.log(example3(7));
