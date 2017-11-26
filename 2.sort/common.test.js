/**
 * 测试common下的工具函数
 */
import test from 'ava'
import { insert, equalArray } from './common'

/**
 * 测试数组的插入方法
 * 将后面的元素往前面插
 */
test('insert function: insert before', t => {
  const arr = [2,3,1,4]
  const result = insert(arr, 3, 1)
  const expect = [2,4,3,1]

  t.true(equalArray(result, expect))
})

/**
 * 测试数组的插入方法
 * 将前面的元素往后面插
 */
test('insert function: insert after', t => {
  const arr = [2,3,1,4]
  const result = insert(arr, 1, 3)
  const expect = [2,1,4,3]

  t.true(equalArray(result, expect))
})