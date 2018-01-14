import test from 'ava'
import LazyPrimMST from './lazy-prim-mst'
import { graph } from './util'

test('lazy prim mst', t => {
  const gr = graph()
  const mst = new LazyPrimMST(gr)

  t.is(mst.weight(), 181)
})
