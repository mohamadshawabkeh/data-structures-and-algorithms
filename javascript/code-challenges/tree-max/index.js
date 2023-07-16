'use strict';
const BinaryTree = require('./tree-max');
const Node = require('./node');

const binaryTree = new BinaryTree();
const root = new Node(2);
const node1 = new Node(7);
const node2 = new Node(5);
const node3 = new Node(2);
const node4 = new Node(6);
const node5 = new Node(9);
const node6 = new Node(5);
const node7 = new Node(11);
const node8 = new Node(4);

root.left = node1;
root.right = node2;
node1.left = node3;
node1.right = node4;
node2.right = node5;
node4.left = node6;
node4.right = node7;
node5.left = node8;

binaryTree.root = root;

const maxValue = binaryTree.findMax();

console.log('Binary Tree Structure:',binaryTree);
console.log('Maximum Value:', maxValue);
