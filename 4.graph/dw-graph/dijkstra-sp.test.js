import { _graph } from './test-util'
import DijkstraSP from './dijkstra-sp'
import test from 'ava'

test('dijkstra', t => {
  const graph = _graph()
  const sp = new DijkstraSP(graph, 0)

  t.is(sp.distTo(1), 105)
  t.is(sp.distTo(3), 26 + 34 + 39)
})