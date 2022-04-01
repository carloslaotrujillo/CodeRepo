// Removing duplicate from arra can be done by 2 methos. One is convert the array in a set, which doesnt allow duplicates, and we are done. And the second methos involves iterate our array and call the method includes against the original aray while we build our final array with no duplicated.

// Method 1

const nums = [1, 1, 2, 2, 2, 3, 3, 3];
const numSet = new Set();
nums.forEach((value) => numSet.add(value));
const newNums = Array.from(numSet);
console.log(newNums);

// Method 2

const singleValArr = [];
nums.forEach((value) => {
    if(!singleValArr.includes(value)) {
        singleValArr.push(value);
    }
});

console.log(singleValArr);