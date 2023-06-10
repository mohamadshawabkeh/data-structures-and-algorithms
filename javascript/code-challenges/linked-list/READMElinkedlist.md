# Linked List

The Linked List is a data structure that consists of a sequence of elements, where each element contains a value and a reference to the next element. This implementation of the Linked List class provides methods to insert nodes at the head of the list, check if a value exists in the list, and obtain a string representation of the list.

## [Img-For-Whiteboard](./class5LinkedList.jpg) 

## Usage

```javascript
const { LinkedList } = require('./LinkedList');

// Create a new linked list
const list = new LinkedList();

// Insert nodes at the head of the list
list.insert('c');
list.insert('b');
list.insert('a');

// Check if a value exists in the list
console.log(list.includes('b')); // Output: true
console.log(list.includes('d')); // Output: false

// Get a string representation of the list
console.log(list.toString()); // Output: "{ a } -> { b } -> { c } -> NULL"
```