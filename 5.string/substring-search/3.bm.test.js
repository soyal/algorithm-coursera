import test from 'ava'
import { suffixes, getGs } from './3.bm'

test('suffixes', t => {
  const pat = 'ACABAB'

  t.is(suffixes(pat).join('-'), [0, 0, 0, 2, 0, 6].join('-'))
})

test('getGs', t => {
  const pat = 'ACABAB'
  //todo
  const result = [6, 6, 6, 2, 6, ]
  t.is(getGs(pat).join('-'), result.join('-'))
})