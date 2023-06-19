'use strict';
const Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(newValue){
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next !== null) {
        currentNode = currentNode.next;
      }
      currentNode.next = newNode;
    }
  }
  insertBefore(value, newValue){
    const newNode = new Node(newValue);

    if (this.head === null) {
      return;
    }

    if (this.head.value === value) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next !== null && currentNode.next.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode.next === null) {
      return;
    }

    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
  insertAfter(value, newValue){
    const newNode = new Node(newValue);

    let currentNode = this.head;
    while (currentNode !== null && currentNode.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      return;
    }
    newNode.next = currentNode.next;
    currentNode.next = newNode;
  }
}

module.exports= LinkedList;
