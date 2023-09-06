'use strict';
// eslint-disable-next-line no-unused-vars
const Vertex = require('./vertex');
const Edge = require('./edge');
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log(`vertex does not exist`);
      return;
    }
    else {
      const adjacencies = this.adjacencyList.get(start);
      let edge = new Edge(end, weight);
      adjacencies.push(edge);
    }
  }
  getVertices(){
    const vertices = [];
    for (const vertex of this.adjacencyList.keys()) {
      vertices.push(vertex.value);
    }
    return vertices;
  }
  getNeighbors(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      console.log(`Vertex does not exist`);
      return [];
    }

    const adjacencies = this.adjacencyList.get(vertex);
    return adjacencies.map(edge => ({
      vertex: edge.vertex.value,
      weight: edge.weight,
    }));
  }
  size() {
    return this.adjacencyList.size;    // method will return 0 by default
  }
}

module.exports = Graph;
