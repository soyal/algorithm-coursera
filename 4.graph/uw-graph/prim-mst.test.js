import test from 'ava'
import { graph } from './util'
import PrimMst from './prim-mst'

test('prim mst', t => {
  const gr = graph()
  const mst = new PrimMst(gr)

  t.is(mst.weight(), 181)
})