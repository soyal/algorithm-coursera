import test from 'ava'
import kmp from './2.kmp'

test('kmp搜索子字符串', t => {
  const txt = 'ababac'
  const pat = 'abac'

  const txt2 = 'aaabbb'
  const pat2 = 'cc'

  t.is(kmp(txt, pat), 2)
  t.is(kmp(txt2, pat2), -1)
})
