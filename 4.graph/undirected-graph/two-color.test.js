import { Graph } from './graph'
import { TwoColor } from './two-color'
import test from 'ava'

test('two color', t => {
  const graph1 = new Graph(1)
  const twoColor1 = new TwoColor(graph1)
  t.true(twoColor1.isTwoColorable())


  const graph2 = new Graph(3)
  graph2.addEdge(0, 1)
  graph2.addEdge(1, 2)
  const twoColor2 = new TwoColor(graph2)
  t.true(twoColor2.isTwoColorable())

  const graph3 = new Graph(3)
  graph3.addEdge(0, 1)
  graph3.addEdge(1, 2)
  graph3.addEdge(0, 2)
  const twoColor3 = new TwoColor(graph3)
  t.false(twoColor3.isTwoColorable())
})