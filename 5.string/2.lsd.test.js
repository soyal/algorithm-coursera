import lsd from './2.lsd'
import test from 'ava'

test('低位优先的字符串排序', t => {
  const arr = ['4pg', '2iy', '3ci', '1ic', '1oh']
  const result = lsd(arr, 3)

  t.is(result.join('-'), ['1ic', '1oh', '2iy', '3ci', '4pg'].join('-'))
})