'use strict';

class BinaryTree {
  constructor() {
    this.root = null;
  }

  findMax() {
    if (this.root === null) {
      return null;
    }
    let maxValue = this.root.value;
    const nodeList = [this.root];
    while (nodeList.length > 0) {
      const node = nodeList.pop();

      if (node.value > maxValue) {
        maxValue = node.value;
      }

      if (node.left) {
        nodeList.push(node.left);
      }

      if (node.right) {
        nodeList.push(node.right);
      }
    }
    return maxValue;
  }
}

module.exports = BinaryTree;
