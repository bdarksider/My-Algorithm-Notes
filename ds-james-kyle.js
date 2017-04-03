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
        let lastAddress = this.length - 1;
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
        if (this.length === 0) return;

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

class Stack {

    constructor() {
        this.list = [];
        this.length = 0;
    }

    // Push to add items to the top of the stack
    push(value) {
        this.length++;
        this.list.push(value)
    }

    pop() {
        if (this.length === 0) return;

        this.length--;
        return this.list.pop();
    }

    peek() {
        return this.list[this.length - 1];
    }
}

class Queue {

    constructor() {
        this.list = [];
        this.legnth = 0;
    }

    enqueue(value) {
        this.length++;
        this.list.push(value);
    }

    dequeue() {
        if (this.length === 0) return;

        this.length--;
        return this.list.shift();
    }

    peek() {
        return this.list[0];
    }
}

class Graph {
    // an array to store references to everything

    constructor() {
        this.nodes = [];
    }

    addNode(value) {
        return this.nodes.push({ value, lines: [] })
    }

    find(value) {
        return this.nodes.find(node => {
            return node.value === value;
        });
    }

    addLine(startValue, endValue) {
        // Find the nodes for each value
        let startNode = this.find(startValue);
        let endNode = this.find(endValue);

        // throw error if not found
        if (!startNode || !endNode) {
            throw new Error('Both nodes need to exist');
        }

        startNode.lines.push(endNode);
    }
}

var graph = new Graph();
graph.addNode(1);
graph.addNode(2);
graph.addLine(1, 2);
var two = graph.find(1).lines[0];

// Linked List
class LinkedList {

    constructor() {
        this.head = null;
        this.length = 0;
    }

    get(position) {
        if (position >= this.length) {
            throw new Error('Position outside of list range');
        }

        // Start with the head of the list
        let current = this.head;

        for (let index = 0; index < position; index++) {
            current = current.next;
        }

        // return the node
        return current;
    }

    add(value, position) {
        // create a node to hold value
        let node = { value, next: null };

        if (position === 0) {
            node.next = this.head;
            this.head = node;
        } else {
            let prev = this.get(position - 1);
            let current = prev.next;

            node.next = current;
            prev.next = node;
        }
        this.length++;
    }

    remove(position) {
        if (!this.head) {
            throw new Error('Removing from empty list');
        }

        // If we need to remove first node, simply set the head to
        // the next node in the chain
        if (position === 0) {
            this.head = this.head.next;
        } else {
            let prev = this.get(position - 1);
            prev.next = prev.next.next;
        }

        this.length--;
    }
}

class Tree {

    // The tree has to start with a single parent, the "root" of the tree
    constructor() {
        this.root = null;
    }

    traverse(callback) {
        // walk function that calls recursively on every node 
        function walk(node) {

            callback(node);

            node.children.forEach(walk);
        }

        walk(this.root);
    }

    add(value, parentValue) {
        let newNode = { value, children: [] };

        if (this.root === null) {
            this.root = newNode;
            return;
        }

        this.traverse(node => {
            if (node.value === parentValue) {
                node.children.push(newNode);
            }
        });
    }
}

class BinarySearchTree {
    // root for BST
    constructor() {
        this.root = null;
    }

    contains(value) {
        let current = this.root;

        // We're going to keep running as long as we have another node to visit.
        // If we reach a `left` or `right` that is `null` then this loop ends.
        while (current) {
            // If the value is greater than current.value, move to the right
            if (value > current.value) {
                current = current.right;

            // If the value is less than the current.value, move to the left
            } else if (value < current.value) {
                current = current.left;
            // Otherwise it must be equal values and return true
            } else {
                return true;
            }

        }
        // If we havn't matched anything then we return false.
        return false;
    }

    add(value) {
        let node = {
            value: value,
            left: null,
            right: null
        };

        // Special case for when there isn't any root node and we just need to add one.
        if (this.root === null) {
            this.root = node;
            return;
        }

        // start at the root
        let current = this.root;

        while (true) {
            if (value > current.value) {
                // if `right` doesn't exist, set it to our node, and stop traversing.
                if (!current.right) {
                    current.right = node;
                    break;
                }

                // Otherwise move to the right node.
                current = current.right;
            } else if (value < current.value) {
                if (!current.left) {
                    current.left = node;
                    break;
                }

                current = current.left;
            // If the number isn't less than or greater, then it must be the same
            // and we dont' do anything.
            } else {
                break;
            }
        }
    }
}
