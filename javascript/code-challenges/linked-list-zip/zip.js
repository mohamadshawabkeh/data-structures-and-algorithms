const Node=require('./node');

class LinkedList {
  constructor() {
    this.head = null;
  }
  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  LinkedListZip(LL1, LL2) {
    let current1 = LL1.head;
    let current2 = LL2.head;
    let result = new LinkedList();
    let flag = true;

    while (current1 || current2) {
      if (flag && current1) {
        result.append(current1.data);
        current1 = current1.next;
      } else if (!flag && current2) {
        result.append(current2.data);
        current2 = current2.next;
      }
      flag = !flag;
    }

    return result;
  }
}
  
module.exports = LinkedList;
