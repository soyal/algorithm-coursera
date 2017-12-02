import test from 'ava'
// import { equalArray } from './common'
import { _sort } from './quick-sort'

// 测试_sort方法
test('quick sort base _sort function', t => {
  const arr = [3, 1, 2, 4]
  t.is(_sort(arr, 0 ,3), 2)
})