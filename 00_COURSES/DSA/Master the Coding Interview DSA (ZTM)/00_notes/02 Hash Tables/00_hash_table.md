 # Hash Tables
## What is a Hash Table?
- Hash tables are used to store key-value pairs.
- They are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!
- Nearly every programming language has some sort of hash table data structure.
- Because of their speed, hash tables are very commonly used!
- Hash tables can find values quickly given a key.
- This is why they are used to store key-value pairs.

## Complexity
- Lookup: `O(1)`
- Insert: `O(1)`
- Deletion: `O(1)`
- Access: `O(1)`
- Searching: `O(n)`

## Good for
- Fast lookups (good collision resolution needed)
- Fast inserts
- Flexible keys

## Bad for
- Unordered
- Slow key iteration
- Slow deletes
- Fixed size (if using static arrays)
- Slow lookups (bad collision resolution)
- No search operations
- No reverse lookup 

## Implementation of a Hash Table in JavaScript
```javascript
class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key) {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for (let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }

    keys() {
        const keysArray = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i]) {
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}
  