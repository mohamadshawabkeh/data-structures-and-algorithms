const Graph = require('./graph-breadth-first'); 

describe('Graph', () => {
  let graph;

  beforeEach(() => {
    graph = new Graph();
  });

  it('should perform breadth-first traversal correctly', () => {
    const pandora = graph.addVertex('Pandora');
    const arendelle = graph.addVertex('Arendelle');
    const metroville = graph.addVertex('Metroville');
    const monstropolis = graph.addVertex('Monstropolis');
    const narnia = graph.addVertex('Narnia');
    const naboo = graph.addVertex('Naboo');

    graph.addEdge(pandora, arendelle);
    graph.addEdge(arendelle, metroville);
    graph.addEdge(arendelle, monstropolis);
    graph.addEdge(metroville, monstropolis);
    graph.addEdge(metroville, narnia);
    graph.addEdge(metroville, naboo);
    graph.addEdge(monstropolis, naboo);
    graph.addEdge(narnia, naboo);

    const bfsResult = graph.breadthFirst(pandora);
    expect(bfsResult).toEqual(["Pandora", "Arendelle", "Metroville", "Monstropolis", "Narnia", "Naboo"]);
  });

  it('should handle a graph with no edges', () => {
    const pandora = graph.addVertex('Pandora');
    const bfsResult = graph.breadthFirst(pandora);
    expect(bfsResult).toEqual(["Pandora"]);
  });

  it('should handle a graph with one vertex', () => {
    const pandora = graph.addVertex('Pandora');
    const bfsResult = graph.breadthFirst(pandora);
    expect(bfsResult).toEqual(["Pandora"]);
  });
});
