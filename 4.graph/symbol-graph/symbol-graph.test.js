import test from 'ava'
import SymbolGraph from './symbol-graph'

test('symbol graph', t => {
  const sg = new SymbolGraph([['aa', 'bb'], ['bb', 'cc'], ['cc', 'aa']])

  t.true(sg.contains('aa'))
  t.true(sg.contains('cc'))
  t.false(sg.contains('dd'))

  t.is(sg.index('aa'), 0)
  t.is(sg.index('bb'), 1)

  t.is(sg.name(2), 'cc')
})
