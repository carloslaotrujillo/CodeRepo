// The JavaScript delete operator removes a property from an object; if no more references to the same property are held, it is eventually released automatically.

const Employee = {
  firstname: "John",
  lastname: "Doe",
};

console.log(Employee.firstname);
// expected output: "John"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined

console.log(Employee);
// expected output: { lastname: 'Doe'}

// The use of delete is not recommended to use since we don't want to be changing the data model in our objects across our app, this could lead to crashed and bugs. Instead we could set the values of that property to some initial value like 0, null or empty string.
