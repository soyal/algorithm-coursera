import test from 'ava'
import quick3way from './quick3way'
import { equalArray } from './common'

test('三向切分快速排序', t => {
  const arr = [1,4,2,3,2,6,5,3]

  quick3way(arr, 0, arr.length - 1)

  t.true(equalArray(arr, [1,2,2,3,3,4,5,6]))
})