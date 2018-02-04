import TST from './5.tst'
import test from 'ava'

test('三向单词查找树',t => {
  const tst = new TST()

  tst.put('she', 1)
  tst.put('shells', 2)

  t.is(tst.get('she'), 1)
  t.is(tst.get('shells'), 2)
})