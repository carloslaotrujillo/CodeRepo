# Arrays

Arrays is a data sctructure to store data sequentially. It is a collection of items stored at contiguous memory locations. The idea is to store multiple items of the same type together. This makes it easier to calculate the position of each element by simply adding an offset to a base value, i.e., the memory location of the first element of the array (generally denoted by the name of the array).

## Array Operations
- Access - O(1)
- Search - O(n)
- Insertion - O(n)
- Deletion - O(n)

## Array Methods
- a[x] - Accessing an element - O(1)
- a.push(x) - Adding an element to the end of the array - O(1)
- a.pop() - Removing an element from the end of the array - O(1)
- a.unshift(x) - Adding an element to the beginning of the array - O(n)
- a.shift() - Removing an element from the beginning of the array - O(n)
- a.splice(x, y) - Removing y elements from position x - O(n)
- a.splice(x, 0, y) - Adding y elements from position x - O(n)
- a.slice(x, y) - Copying elements from position x to y - O(n)
- a.concat(b) - Concatenating two arrays - O(n)
- a.sort() - Sorting the array - O(n log n)
- a.reverse() - Reversing the array - O(n)


### Strings can be considered as arrays of characters. We can use the same methods as arrays to manipulate strings like the split method.
    
### Arrays are good for 
- Fast lookups
- Fast push/pop
- Ordered

### Arrays are bad for
- Slow inserts
- Slow deletes
- Fixed size (if using static arrays)
- Not sorted

### Implemention of an array in JavaScript 
```javascript
class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem;
    }

    delete(index) {
        const item = this.data[index];
        this.shiftItems(index);
        return item;
    }

    shiftItems(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}
