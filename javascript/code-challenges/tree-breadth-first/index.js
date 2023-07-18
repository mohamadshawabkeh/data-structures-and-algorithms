'use strict';
const Node = require('./node');
const breadthFirst = require('./tree-breadth-first');

const tree = new Node(2); // root for our tree
tree.left = new Node(7);
tree.left.left = new Node(2);
tree.left.right = new Node(6);
tree.left.right.left = new Node(5);
tree.left.right.right = new Node(11);
tree.right = new Node(5);
tree.right.right = new Node(9);
tree.right.right.left = new Node(4);

const result = breadthFirst(tree);
console.log(result); 

