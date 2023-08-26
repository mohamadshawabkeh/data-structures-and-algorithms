'use strict';
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
  }
  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }
  // returning the all the values  from the linkedList
  print() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }
}
class Hashmap {
  constructor(size) {
    this.size = size;
    this.map = new Array(size);
  }
  makeHash(key) {
    const asciiCodeSum = key.split('').reduce((acc, char) => {
      return acc + char.charCodeAt();
    }, 0);
    const multiPrime = asciiCodeSum * 599;
    const theIndex = multiPrime % this.size;
    return theIndex;
  }
  set(key, value) {
    const hash = this.makeHash(key);
    if(!this.map[hash]){
      this.map[hash] = new LinkedList();
    }

    this.map[hash].append({ [key]: value });
  }
  get (key) {
    const hash = this.makeHash(key);
    const bucket = this.table[hash];
    for (const entry of bucket) {
      if (entry[0] === key) {
        return entry[1];
      }
    }
    return undefined;
  }
  has(key) {
    const hash = this.makeHash(key);
    const bucket = this.table[hash];

    for (const entry of bucket) {
      if (entry[0] === key) {
        return true;
      }
    }
    return false;
  }
  keys() {
    const keysCollection = [];

    this.table.forEach(bucket => {
      bucket.forEach(([key]) => keysCollection.push(key));
    });
    return keysCollection;
  }
  hash(key) {
    return this.makeHash(key);
  }
}

module.exports=Hashmap;

// const hashmap = new Hashmap(10);

// hashmap.set('name', 'Alice');
// hashmap.set('age', 30);
// hashmap.set('city', 'Wonderland');

// console.log(hashmap.get('name'));
// console.log(hashmap.get('age')); 
// console.log(hashmap.get('city')); 
// console.log(hashmap.get('key'));  

// console.log(hashmap.has('name'));
// console.log(hashmap.has('key')); 

// const keys = hashmap.keys();
// console.log(keys); 

// const hashValue = hashmap.hash('name');
// console.log(hashValue);

