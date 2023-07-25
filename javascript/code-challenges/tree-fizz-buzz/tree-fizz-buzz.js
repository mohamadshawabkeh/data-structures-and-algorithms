'use strict';
const Node = require('./node');

function fizzBuzzTree(root) {
  function getFizzBuzzValue(value) {
    if (value % 3 === 0 && value % 5 === 0) {
      return 'FizzBuzz';
    } else if (value % 3 === 0) {
      return 'Fizz';
    } else if (value % 5 === 0) {
      return 'Buzz';
    } else {
      return String(value);
    }
  }
  function reqTree(node) {
    if (!node) {
      return null;
    }
    const newNode = new Node(getFizzBuzzValue(node.value));
    for (let i = 0; i < node.children.length; i++) {
      newNode.children.push(reqTree(node.children[i]));
    }
    return newNode;
  }
  if (!root) {
    return null;
  }
  return reqTree(root);
}

module.exports = fizzBuzzTree;
