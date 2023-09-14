class Node {
  constructor(data) {
    this.data = data;
    this.neighbors = [];
  }
}

class Graph {
  constructor() {
    this.nodes = [];
  }

  addNode(node) {
    this.nodes.push(node);
  }

  depthFirst(startNode) {
    var visited = new Set();
    var result = [];
    var stack = [startNode];

    while (stack.length) {
      var node = stack.pop();
      var isVisited = false;

      visited.forEach((visitedNode) => {
        if (visitedNode === node) {
          isVisited = true;
        }
      });
      if (!isVisited) {
        visited.add(node);
        result.push(node.data);

        for (var i = 0; i < node.neighbors.length; i++) {
          var neighbor = node.neighbors[i];
          stack.push(neighbor);
        }
      }
    }

    return result;
  }
}

// const A = new Node('A');
// const B = new Node('B');
// const C = new Node('C');
// const D = new Node('D');
// const E = new Node('E');
// const F = new Node('F');
// const G = new Node('G');
// const H = new Node('H');

// A.neighbors.push(B, D);
// B.neighbors.push(A, D, C);
// C.neighbors.push(G, B);
// G.neighbors.push(C);
// D.neighbors.push(A, B, E, H, F);
// F.neighbors.push(D, H);
// H.neighbors.push(F, D);
// E.neighbors.push(D);

// const graph = new Graph();
// graph.addNode(A);
// graph.addNode(B);
// graph.addNode(C);
// graph.addNode(G);
// graph.addNode(D);
// graph.addNode(F);
// graph.addNode(H);
// graph.addNode(E);

// const result = graph.depthFirst(A); // starting from point a

// console.log(result.join(', '));

module.exports = {
  Graph:Graph,
  Node:Node,
};
