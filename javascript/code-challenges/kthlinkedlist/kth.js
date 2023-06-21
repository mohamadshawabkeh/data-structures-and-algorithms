'use strict';

class LinkedList {
  constructor() {
    this.head = null;
  }
  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('Invalid value for k');
    }
    let slow = this.head;
    let fast = this.head;
    while (k > 0) {
      if (fast === null) {
        throw new Error('k is larger than the length of the linked list');
      }
      fast = fast.next;
      k--;
    }
    while (fast.next !== null) {
      slow = slow.next;
      fast = fast.next;
    }
    return slow.value;
  }
}

module.exports= LinkedList;
