// graph-depth-first.test.js

const { Node, Graph } = require('./graph-depth-first'); 

describe('Graph Depth-First Search', () => {
  test('Depth-First Search starting from node A', () => {
    const A = new Node('A');
    const B = new Node('B');
    const C = new Node('C');
    const D = new Node('D');
    const E = new Node('E');
    const F = new Node('F');
    const G = new Node('G');
    const H = new Node('H');

    A.neighbors.push(B, D);
    B.neighbors.push(A, D, C);
    C.neighbors.push(G, B);
    G.neighbors.push(C);
    D.neighbors.push(A, B, E, H, F);
    F.neighbors.push(D, H);
    H.neighbors.push(F, D);
    E.neighbors.push(D);

    const graph = new Graph();
    graph.addNode(A);
    graph.addNode(B);
    graph.addNode(C);
    graph.addNode(G);
    graph.addNode(D);
    graph.addNode(F);
    graph.addNode(H);
    graph.addNode(E);

    const result = graph.depthFirst(A);

    const expected = new Set(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']);

    const resultSet = new Set(result);

    expect(resultSet).toEqual(expected);
  });
});
