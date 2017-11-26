import test from 'ava'
import { equalArray } from './common'
import selectSort from './select-sort'

/**
 * 选择排序
 */
test("select sort test", t => {
  const arr = [2,3,1,4,5,6,7]
  const expect = [1,2,3,4,5,6,7]

  t.true(equalArray(selectSort(arr), expect))
})