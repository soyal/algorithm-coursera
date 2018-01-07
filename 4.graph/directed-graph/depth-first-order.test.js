import test from 'ava'
import DepthFirstOrder from './depth-first-order'
import DiGraph from './di-graph'

test('depth first order', t => {
  const graph = new DiGraph(5)
  graph.addEdge(0, 1)
  graph.addEdge(0, 2)
  graph.addEdge(0, 3)
  graph.addEdge(2, 4)
  graph.addEdge(3, 4)
  const dfo = new DepthFirstOrder(graph)

  t.is(dfo.pre().join('-'), '0-1-2-4-3')
  t.is(dfo.post().join('-'), '1-4-2-3-0')
  t.is(dfo.reversePost().join('-'), '0-3-2-4-1')
})