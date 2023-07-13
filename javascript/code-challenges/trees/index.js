const BinaryTree = require('./binary-tree');
const BinarySearchTree = require('./binary-search');
const Node = require('./node');

let tree = null;
let searchTree = null;

let one = new Node(1);
let two = new Node(2);
let three = new Node(3);
let four = new Node(4);
let five = new Node(5);
let six = new Node(6);
let seven = new Node(7);
let eight = new Node(8);
let nine = new Node(9);

one.left = two;
one.right = three;
two.left = six;
three.left = four;
three.right = five;
six.right = seven;
seven.left = eight;
seven.right = nine;

tree = new BinaryTree(one);

let preOrder = tree.preOrder();
let inOrder = tree.inOrder();
let postOrder = tree.postOrder();


console.log('preOrder: ', preOrder);
console.log('inOrder: ', inOrder);
console.log('postOrder: ', postOrder);

console.log('--------------------Binary Search Tree result--------------------');

searchTree = new BinarySearchTree();

searchTree.add(5);
searchTree.add(3);
searchTree.add(7);
searchTree.add(2);
searchTree.add(4);
searchTree.add(6);
searchTree.add(8);

console.log('Contains 6:', searchTree.contains(6));
console.log('Contains 9:', searchTree.contains(9));
