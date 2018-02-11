import test from 'ava'
import bm, { suffixes, getGs, getBc } from './3.bm'

test('getBc', t => {
  const pat = 'example'
  const bc = getBc(pat)
  
  t.is(bc[pat.charCodeAt(0)], 6)
  t.is(bc[pat.charCodeAt(1)], 1)
  t.is(bc[pat.charCodeAt(6)], 6)
})

test('suffixes', t => {
  const pat1 = 'ACABAB'
  t.is(suffixes(pat1).join('-'), [0, 0, 0, 2, 0, 6].join('-'))

  const pat2 = 'ABCDAB'
  t.is(suffixes(pat2).join('-'), [0, 2, 0, 0, 0, 6].join('-'))
})

test('getGs', t => {
  const pat1 = 'ACABAB'
  const result1 = [6, 6, 6, 2, 6, 6]
  t.is(getGs(pat1).join('-'), result1.join('-'))

  const pat2 = 'ABCDAB'
  const result2 = [4, 4, 4, 4, 6, 6]
  t.is(getGs(pat2).join('-'), result2.join('-'))
})

test('bm', t => {
  const txt1 = 'this is a example'
  const pat1 = 'example'

  t.is(bm(txt1, pat1), 10)

  const txt2 = 'here is abc dad'
  const pat2 = 'is'
  t.is(bm(txt2, pat2), 5)
})