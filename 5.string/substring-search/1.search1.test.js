import search from './1.search1'
import test from 'ava'

test('暴力搜索法(显式回退)', t => {
  const txt = 'abcabcaaaccc'
  const pat = 'bcaa'

  t.is(search(pat, txt), 4)

  const txt2 = 'afsdlfjsdkfjlsdkfd'
  const pat2 = 'czz'
  t.is(search(pat2, txt2), txt2.length)
})