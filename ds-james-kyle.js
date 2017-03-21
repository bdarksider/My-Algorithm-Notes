'use strict';
// Lists
class List {
    constructor() {
        this.memory = [];
        this.length = 0;
    }

    get(address) {
        return this.memory[address]
    }

    push(value) {
        this.memory[this.length] = value;
        this.length++;
    }

    pop() {
        if (this.length === 0) return;

        // Get the last value, stop storing it, return it.
        let lastAddress = this.length -1;
        let value = this.memory[lastAddress];
        delete this.memory[lastAddress];
        this.length--;

        return value;
    }

    unshift(value) {
        // store value that is to be stored
        let previous = value;

        for (let address = 0; address < this.length; address++) {
            let current = this.memory[address];
            this.memory[address] = previous;
            previous = current;
        }

        // Add the last item
        this.memory[this.length] = previous;
        this.length++;
    }

    shift() {
        // don't do anything if we don't have any items
        if(this.length === 0) return;

        let value = this.memory[0];

        for (let address = 0; address < this.length; address++) {
            this.memory[address] = this.memory[address + 1];
        }

        // Delete the last item since it is now in the previous address
        delete this.memory[this.length - 1];
        this.length--;
    }
}

// HashTable
// var hashTable = new HashTable();
// hashTable.set('myKey', 'myValue');
// hasTable.get('myKey'); >> 'myValue'

class HashTable {

    constructor() {
        this.memory = [];
    }

    // hashing
    // hashKey("abc") => 93233
    // hashKey("xyz") => 123213
    
    hashKey(key) {
        let hash = 0;
        for (let index = 0; index < key.length; index++) {
            let code = key.charCodeAt(index);
            hash = ((hash << 5) - hash) + code | 0;
        }
        return hash;
    }

    get(key) {
        let address = this.hashkey(key);
        return this.memory[address];
    }

    set(key, value) {
        let address = this.hashKey(key);
        this.memory[address] = value;
    }

    remove(key) {
        let address = this.hashkey(key);

        if (this.memory[address]) {
            delete this.memory[address];
        }
    }
}
