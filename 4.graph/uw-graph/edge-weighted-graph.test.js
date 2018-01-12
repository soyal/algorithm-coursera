import test from 'ava'
import Edge from './edge'
import EWGraph from './edge-weighted-graph'

test('edge weighted graph', t => {
  const graph = new EWGraph(4)
  const edge1 = new Edge(0, 1, 1)
  const edge2 = new Edge(0, 2, 2)
  const edge3 = new Edge(0, 3, 3)
  
  graph.addEdge(edge1)
  graph.addEdge(edge2)
  graph.addEdge(edge3)

  t.is(graph.V(), 4)
  t.is(graph.E(), 3)

  // adj test
  const adj = graph.adj(0)
  t.is(adj.length, 3)
  t.is(adj[0].weight(), 1)

  // edges test
  const edges = graph.edges()
  t.is(edges.length, 3)
  t.is(edges[1].weight(), 2)
})