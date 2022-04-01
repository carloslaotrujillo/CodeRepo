const obj1 = {
  first: "John",
  last: "Doe",
  contry: "USA",
};
console.log(obj1);

const obj2 = { ...obj1 }; // Best way
obj2.first = "Jane";
console.log(obj1);
console.log(obj2);

const obj4 = JSON.parse(JSON.stringify(obj1));
obj4.first = "Isaak";
console.log(obj1);
console.log(obj4);

const obj3 = obj1; // Bad idea. Pass by reference.
obj3.first = "Joe";
console.log(obj1);
console.log(obj3);

// How to check if 2 objects are the same. Not have the sane value, are the same object itself, aka are pointing to the same space in memory.
console.log(Object.is(obj1, obj2));
console.log(Object.is(obj1, obj3));
console.log(Object.is(obj1, obj4));
