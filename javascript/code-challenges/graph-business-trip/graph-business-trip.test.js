/* eslint-disable no-unused-vars */
const Graph = require('../graph/graph');
const businessTrip = require('./graph-business-trip');
const Vertex = require('../graph/vertex');

describe('businessTrip', () => {

  it('should return null for an invalid trip with missing cities', () => {
    const graph = new Graph();

    expect(businessTrip(graph, ['Metroville', 'Arendelle'])).toBe(null);
  });

  it('should return null for an invalid trip with no direct flights', () => {
    const graph = new Graph();

    const metroville = graph.addVertex('Metroville');
    const pandora = graph.addVertex('Pandora');
    const arendelle = graph.addVertex('Arendelle');

    graph.addDirectedEdge(metroville, pandora, 82);

    expect(businessTrip(graph, ['Metroville', 'Arendelle'])).toBe(null);
  });
});
