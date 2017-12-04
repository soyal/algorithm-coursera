import test from 'ava'
import { sort, sink } from './heap-sort'
import { equalArray } from './common'


test('heap sort sink', t => {
  const arr = [0, 2, 4, 5]
  const expect = [0, 5, 4, 2]

  t.true(equalArray(sink(arr, 1, 3), expect))
})

test('heap sort', t => {
  const arr = [0, 2, 3, 4, 1, 5]
  const expect = [0, 1, 2, 3, 4, 5]
  t.true(equalArray(sort(arr, 5), expect))

  const arr2 = [0, 1, 4, 3, 2, 5, 7, 6]
  const expect2 = [0, 1, 2, 3, 4, 5, 6, 7]

  t.true(equalArray(sort(arr2, 7), expect2))
})