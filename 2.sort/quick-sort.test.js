import test from 'ava'
import { equalArray } from './common'
import { _sort, quickSortBase, quickSortNormal } from './quick-sort'

// 测试_sort方法
test('quick sort base _sort function', t => {
  const arr = [3, 1, 2, 4]
  const arr2 = [1, 3, 4]
  t.is(_sort(arr, 0, 3), 2)
  t.is(_sort(arr2, 0, 2), 0)
})

test('quick sort base', t => {
  const arr1 = [3, 1, 2, 4]
  const expect1 = [1, 2, 3, 4]

  const arr2 = [1, 4, 5, 6, 2, 3]
  const expect2 = [1, 2, 3, 4, 5, 6]

  t.true(equalArray(quickSortBase(arr1, 0, 3), expect1))
  t.true(equalArray(quickSortBase(arr2, 0, 5), expect2))
})

test('quick sort normal', t => {
  const arr1 = [3, 1, 2, 4]
  const expect1 = [1, 2, 3, 4]

  const arr2 = [1, 4, 5, 6, 2, 3]
  const expect2 = [1, 2, 3, 4, 5, 6]

  const arr3 = [9, 4, 2, 1, 3, 7, 8, 6, 5]
  const expect3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  t.true(equalArray(quickSortNormal(arr1, 0, 3), expect1))
  t.true(equalArray(quickSortNormal(arr2, 0, 5), expect2))
  t.true(equalArray(quickSortNormal(arr3, 0, 8), expect3))
})