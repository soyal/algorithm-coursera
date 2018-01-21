import { _unCycledgraph } from './test-util'
import AcyclicSP from './acyclic-sp'
import test from 'ava'

test('AcyclicSP', t => {
  const graph = _unCycledgraph()
  const sp = new AcyclicSP(graph, 5)

  t.is(sp.distTo(0), 35 + 38)
  t.is(sp.distTo(2), 28 + 34)
})
