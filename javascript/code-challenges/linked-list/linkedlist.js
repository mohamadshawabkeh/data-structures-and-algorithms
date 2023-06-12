'use strict'

const Node = require('./Node');


class LinkedList {
    constructor() {
      this.head = null;
    };
  };

  insert(value) {
    const newNode = new Node(value);
    if (!this.head) {
        //if the linkedlist is empty
        this.head = newNode;
        return this;
    }
    let currentNode = this.head;
    while (currentNode.next) {
        currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this;
}
includes(value) {
  const currentNode = this.head;
  while (currentNode !== null){
  if (currentNode.value === value) {
      return true;
}
 currentNode = currentNode.next;
}
 return false;

}
toString (){
  const result = "";
  const currentNode=this.head;
  while (currentNode !== null){
    result +=`{ ${currentNode.value} } -> `;
    currentNode = currentNode.next;

  }
  result +="NULL";
  return result;
};