/**
 * 初级排序测试用例
 */
import test from 'ava'
import { equalArray } from './common'
import selectSort from './select-sort'
import insertSort from './insert-sort'
import shellSort from './shell-sort'

/**
 * 选择排序
 */
test('select sort', t => {
  const arr = [2, 3, 1, 4, 5, 6, 7]
  const expect = [1, 2, 3, 4, 5, 6, 7]

  t.true(equalArray(selectSort(arr), expect))
})

/**
 * 插入排序
 */
test('insert sort', t => {
  const arr = [2, 3, 1, 4, 5, 6, 7]
  const expect = [1, 2, 3, 4, 5, 6, 7]

  t.true(equalArray(insertSort(arr), expect))
})

/**
 * 希尔排序
 */
test('shell sort', t => {
  const arr = [2, 3, 1, 5, 4]
  const expect = [1, 2, 3, 4, 5]
  t.true(equalArray(shellSort(arr), expect))
})