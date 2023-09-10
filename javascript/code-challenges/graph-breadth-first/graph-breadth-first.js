class Graph {
  constructor() {
    this.vertices = new Map();
  }

  addVertex(vertex) {
    this.vertices.set(vertex, []);
    return vertex;
  }

  addEdge(vertex1, vertex2) {
    this.vertices.get(vertex1).push(vertex2);
    this.vertices.get(vertex2).push(vertex1);
  }

  breadthFirst(startVertex) {
    const visited = new Set();
    const result = [];
    const queue = [startVertex];

    visited.add(startVertex);

    while (queue.length > 0) {
      const currentVertex = queue.shift();
      result.push(currentVertex);

      for (const neighbor of this.vertices.get(currentVertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }
}
module.exports = Graph;

// const graph = new Graph();
// const pandora = graph.addVertex('Pandora');
// const arendelle = graph.addVertex('Arendelle');
// const metroville = graph.addVertex('Metroville');
// const monstropolis = graph.addVertex('Monstropolis');
// const narnia = graph.addVertex('Narnia');
// const naboo = graph.addVertex('Naboo');

// graph.addEdge(pandora, arendelle);
// graph.addEdge(arendelle, metroville);
// graph.addEdge(arendelle, monstropolis);
// graph.addEdge(metroville, monstropolis);
// graph.addEdge(metroville, narnia);
// graph.addEdge(metroville, naboo);
// graph.addEdge(monstropolis, naboo);
// graph.addEdge(narnia, naboo);

// const bfsResult = graph.breadthFirst(pandora);
// console.log(bfsResult);

