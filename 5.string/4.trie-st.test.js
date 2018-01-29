import test from 'ava'
import TrieST from './4.trie-st'

test('单词查找树', t => {
  const st = new TrieST()
  st.put('ab', 1)
  st.put('a', 2)
  st.put('c', 3)

  t.is(st.get('cc'), null)
  t.is(st.get('ab'), 1)
  t.is(st.get('a'), 2)
})