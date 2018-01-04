import test from 'ava'
import DirectedCycle from './directed-cycle'
import DiGraph from './di-graph'

test('directed cycle', t => {
  // p374 上边的图左边部分0-6
  const graph = new DiGraph(7)
  graph.addEdge(0, 1)
  graph.addEdge(0, 5)
  graph.addEdge(0, 6)
  graph.addEdge(2, 0)
  graph.addEdge(2, 3)
  graph.addEdge(3, 5)
  graph.addEdge(5, 4)
  graph.addEdge(6, 4)

  const dcycle = new DirectedCycle(graph)
  t.false(dcycle.hasCycle())

  const graph2 = new DiGraph(4)
  graph2.addEdge(0, 1)
  graph2.addEdge(1, 2)
  graph2.addEdge(2, 3)
  graph2.addEdge(3, 0)
  const dcycle2 = new DirectedCycle(graph2)
  t.true(dcycle2.hasCycle())
  t.is(dcycle2.cycle().join('-'), '3-2-1-0-3')
})