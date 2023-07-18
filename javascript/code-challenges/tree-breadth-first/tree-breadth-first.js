'use strict';

function breadthFirst(tree) {
  if (tree === null) {
    return [];
  }
  const result = [];
  const queue = [];
  queue.push(tree); // starting from 2 (topRoot)
  let currentIndex = 0;
  while (currentIndex < queue.length) {
    const currentNode = queue[currentIndex];
    result.push(currentNode.value);

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }
    currentIndex++;
  }
  //   return queue;
  return result;

}
module.exports = breadthFirst;

