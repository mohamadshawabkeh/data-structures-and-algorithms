const fizzBuzzTree = require('./tree-fizz-buzz');
const Node = require('./node');

describe('Fizz Buzz Tree', () => {
  test('Should convert values of the k-ary tree to Fizz, Buzz, FizzBuzz, or String', () => {
    const root = new Node(1);
    const child1 = new Node(3);
    const child2 = new Node(5);
    const child3 = new Node(15);
    const child4 = new Node(7);

    root.children.push(child1);
    root.children.push(child2);
    root.children.push(child3);
    root.children.push(child4);

    const expectedTree = new Node('1');
    const expectedChild1 = new Node('Fizz');
    const expectedChild2 = new Node('Buzz');
    const expectedChild3 = new Node('FizzBuzz');
    const expectedChild4 = new Node('7');

    expectedTree.children.push(expectedChild1);
    expectedTree.children.push(expectedChild2);
    expectedTree.children.push(expectedChild3);
    expectedTree.children.push(expectedChild4);
    const newTree = fizzBuzzTree(root);
    expect(newTree).toEqual(expectedTree);
  });
});
