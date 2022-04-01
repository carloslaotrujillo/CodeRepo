// Is use when check for prototypes in JS. Not very useful to check against primitives.

console.log(4 instanceof Number);
console.log("Hello world" instanceof String);

console.log({} instanceof Object);
console.log([] instanceof Object);

class Circle {}
const circle = new Circle();
console.log(circle instanceof Circle);
console.log(circle instanceof Object);
