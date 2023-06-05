'use strict';

// Require the linked list implementation
// const LinkedList = require('../../linked-list');

module.exports = function reverse(list) {
  let reversed = [];
  for (let i =list.length-1; i>= 0; i--) {
    reversed.push(list[i]);

  }
  return reversed;

  // return true;

};
