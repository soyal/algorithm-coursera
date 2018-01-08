import KosarajuSCC from './kosaraju'
import Digraph from './di-graph'
import test from 'ava'

test('kosaraju', t => {
  const graph = new Digraph(2)
  graph.addEdge(0, 1)
  graph.addEdge(1, 0)
  const scc = new KosarajuSCC(graph)

  t.true(scc.stronglyConnected(0, 1))
})