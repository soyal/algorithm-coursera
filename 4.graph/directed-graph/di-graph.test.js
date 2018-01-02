import test from 'ava'
import Digraph from './di-graph'

test('di graph class', t => {
  const graph = new Digraph(3)

  graph.addEdge(0, 1)
  graph.addEdge(0, 2)
  
  t.is(graph.V(), 3)
  t.is(graph.E(), 2)
  const graphAdj = graph.adj(0)
  t.is(graphAdj[0], 1)
  t.is(graphAdj[1], 2)
  t.is(graphAdj.length, 2)
  t.is(graph.adj(1).length, 0)
  t.is(graph.adj(2).length, 0)

  const rgraph = graph.reverse()
  t.is(rgraph.V(), 3)
  t.is(rgraph.E(), 2)
})
