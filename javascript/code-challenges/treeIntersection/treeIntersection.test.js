const { Node, treeIntersection } = require('./treeIntersection');

describe('treeIntersection', () => {
  it('should return an array of common values in two binary trees', () => {
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
    expect(commonValues).toEqual([160, 125, 175, 200, 350, 500]);
  });

  it('should return an empty array for trees with no common values', () => {
    const tree1 = new Node(1);
    tree1.left = new Node(2);
    tree1.right = new Node(3);

    const tree2 = new Node(4);
    tree2.left = new Node(5);
    tree2.right = new Node(6);

    const commonValues = treeIntersection(tree1, tree2);
    expect(commonValues).toEqual([]);
  });
});
