class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function treeIntersection(tree1, tree2) {
  function traverseTree(node, set) {
    if (node) {
      set.add(node.value);
      traverseTree(node.left, set);
      traverseTree(node.right, set); // Traverse function to store values in the set
    }
  }
  var values1 = new Set();
  var values2 = new Set();
  var result = new Set();
  traverseTree(tree1, values1);
  traverseTree(tree2, values2);

  values1.forEach(function (value) { // use forEach to iterating through one set and checking if it exists in the other set
    if (values2.has(value)) {
      result.add(value);
    }
  });

  var commonValues = [];
  result.forEach(function (value) { // let the result Set to be pushed for the output

    commonValues.push(value);
  });

  return commonValues;
}

const tree1 = new Node(100);
tree1.left = new Node(160);
tree1.left.left = new Node(125);
tree1.left.right = new Node(175);
tree1.right = new Node(200);
tree1.right.left = new Node(350);
tree1.right.left.left = new Node(300);
tree1.right.left.right = new Node(500);

const tree2 = new Node(42);
tree2.left = new Node(160);
tree2.left.left = new Node(125);
tree2.left.right = new Node(175);
tree2.right = new Node(600);
tree2.right.left = new Node(200);
tree2.right.right = new Node(350);
tree2.right.right.left = new Node(4);
tree2.right.right.right = new Node(500);

const commonValues = treeIntersection(tree1, tree2);
console.log(commonValues);

module.exports={
  Node:Node,
  treeIntersection:treeIntersection
};
