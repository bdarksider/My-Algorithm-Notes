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


