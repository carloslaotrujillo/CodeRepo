// Non-Pointer
let num1 = 5;
let num2 = num1;

num1 = 10;

console.log(num1); // 10
console.log(num2); // 5

// Pointer
let Obj1 = {val: 5};
let Obj2 = Obj1;

Obj1.val = 10

console.log(Obj1); // 10
console.log(Obj2); // 10

Obj2.val = 20;


console.log(Obj1); // 20
console.log(Obj2); //20

// Garbage Collection is when we point an exiting object that have a value to another value, then that first value cannot be accessed so JS will remove it, because is garbaje, aka, is space in memery that can't be used, so it's removed, ergo Garbage Collection

