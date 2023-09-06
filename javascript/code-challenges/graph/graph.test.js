'use strict';

const Graph = require('./graph');
const Vertex = require('./vertex');
// eslint-disable-next-line no-unused-vars
const Edge = require('./edge');


describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  test('should add vertices', () => {
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);

    expect(graph.getVertices()).toEqual(['A', 'B']);
  });

  test('should add directed edges', () => {
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');
    const vertexC = new Vertex('C');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);
    graph.addVertex(vertexC);

    graph.addDirectedEdge(vertexA, vertexB, 5);
    graph.addDirectedEdge(vertexB, vertexC, 10);

    expect(graph.getNeighbors(vertexA)).toEqual([{ vertex: 'B', weight: 5 }]);
    expect(graph.getNeighbors(vertexB)).toEqual([{ vertex: 'C', weight: 10 }]);
  });

  test('should return the correct size', () => {
    const vertexA = new Vertex('A');
    const vertexB = new Vertex('B');

    graph.addVertex(vertexA);
    graph.addVertex(vertexB);

    expect(graph.size()).toBe(2);
  });
});
