import test from 'ava'
import { merge } from './merge-sort'
import { equalArray } from './common'

// 测试原地归并排序
test('merge sort: merge', t => {
  const arr = [1,3,5,8,9,2,4,6,7]
  const expect = [1,2,3,4,5,6,7,8,9]

  t.true(equalArray(merge(arr, 0, 4, 8), expect))
})

