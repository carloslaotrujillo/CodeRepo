// Dot notation => We can access the object's properties and methods using dot notation. The object name (person) acts as the namespace — it must be entered first to access anything inside the object. Next you write a dot, then the item you want to access — this can be the name of a simple property, an item of an array property, or a call to one of the object's methods, for example:

const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio() {
    return `${this.name[0]} ${this.name[1]} is ${this.age} years old.`;
  },
  introduceSelf() {
    return `Hi! I'm ${this.name[0]}.`;
  },
};

console.log(person.age);
console.log(person.bio());

// Bracket Notation => There is another way to access object properties — using bracket notation. This looks very similar to how you access the items in an array, and it is basically the same thing — instead of using an index number to select an item, you are using the name associated with each member's value. It is no wonder that objects are sometimes called associative arrays — they map strings to values in the same way that arrays map numbers to values.

console.log(person["age"]);
console.log(person["name"]);
