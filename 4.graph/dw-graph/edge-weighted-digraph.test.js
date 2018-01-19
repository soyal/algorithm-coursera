import { _graph } from './test-util'
import test from 'ava'


test('edge weighted digraph',t => {
  const graph = _graph()

  t.is(graph.V(), 8)
  t.is(graph.E(), 15)
  t.is(graph.adj(0).length, 2)
  t.is(graph.edges().length, 15)
})