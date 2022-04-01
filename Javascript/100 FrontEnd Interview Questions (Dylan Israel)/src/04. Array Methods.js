// => map() - The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.
const array1 = [1, 4, 9, 16];
// pass a function to map
const map1 = array1.map((x) => x * 2);
console.log(map1); // Array [2, 8, 18, 32]

// => filter() - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result); // Array ["exuberant", "destruction", "present"]

// => reduce() - The reduce() method executes a user-supplied "reducer" callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value. The first time that the callback is run there is no "return value of the previous calculation". If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value and iteration starts from the next element (index 1 instead of index 0).
const array2 = [1, 2, 3, 4];
const initialValue = 0;
const sumWithInitial = array2.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
}, initialValue);
console.log(sumWithInitial); // 10
