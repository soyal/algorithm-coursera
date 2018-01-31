import test from 'ava'
import TrieST from './4.trie-st'

test('单词查找树 base', t => {
  const st = new TrieST()
  st.put('ab', 1)
  st.put('a', 2)
  st.put('c', 3)

  t.is(st.get('cc'), null)
  t.is(st.get('ab'), 1)
  t.is(st.get('a'), 2)
})

function gst() {
  const st = new TrieST()
  st.put('by', 4)
  st.put('sea', 6)
  st.put('sells', 1)
  st.put('she', 0)
  st.put('shells', 3)
  st.put('shore', 7)
  st.put('the', 5)

  return st
}

test('keysWithPrefix', t=> {
  const st = gst()

  t.is(st.keys().length, 7)
  t.is(st.keysWithPrefix('she').length, 2)
  t.is(st.keysWithPrefix('the').length, 1)
})

test('keysThatMatch', t=> {
  const st = gst()

  t.is(st.keysThatMatch('by').length, 1)
  t.is(st.keysThatMatch('abc').length, 0)
  t.is(st.keysThatMatch('s..').length, 2)
  t.is(st.keysThatMatch('.he').length, 2)
})