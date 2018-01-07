import test from 'ava'
import Topological from './topo-logical'
import DiGraph from './di-graph'

test('topo logical', t => {
  const graph = new DiGraph(5)
  graph.addEdge(0, 1)
  graph.addEdge(0, 2)
  graph.addEdge(0, 3)
  graph.addEdge(2, 4)
  graph.addEdge(3, 4)

  const topo = new Topological(graph)
  t.is(topo.order().join('-'), '0-3-2-4-1')
})