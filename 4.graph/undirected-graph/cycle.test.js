import { Graph } from './graph'
import { Cycle } from './cycle'
import test from 'ava'

test('Cycle', t => {
  const graph1 = new Graph(4)
  graph1.addEdge(0, 1)
  graph1.addEdge(0, 2)
  graph1.addEdge(0, 3)
  const cycle1 = new Cycle(graph1)
  t.false(cycle1.hasCycle())

  const graph2 = new Graph(1)
  const cycle2 = new Cycle(graph2)
  t.false(cycle2.hasCycle())

  const graph3 = new Graph(4)
  graph3.addEdge(0, 1)
  graph3.addEdge(0, 2)
  graph3.addEdge(1, 2)
  graph3.addEdge(0, 3)
  const cycle3 = new Cycle(graph3)
  t.true(cycle3.hasCycle())
})