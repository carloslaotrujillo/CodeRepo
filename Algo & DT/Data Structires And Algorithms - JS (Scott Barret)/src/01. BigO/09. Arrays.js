// Adding or removing elements at the end of the array dont require re-indexing of the rest of the arrar, ergo .push() and .pop() are O(1)

// Adding or removing element at the beguinning (or in between) of the array requires reindexing of the entire array, ergo .unshift() and .shift() and .splice() are O(n)

// Searching by value on the array is O(n) worst case

// Searching by index on the array is O(1)