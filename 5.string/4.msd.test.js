import test from 'ava'
import MSD from './4.msd'

test('高位优先的字符串排序',t => {
  const a = ['a', 'b', 'aa', 'ab', 'ada', 'aaa']
  MSD.sort(a)

  t.is(a.join('-'), 'a-aa-aaa-ab-ada-b')
})