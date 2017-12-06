import { binarySearch } from './binary-search'
import test from 'ava'

test('binary search', t => {
  const arr = [1,3,4]

  t.is(binarySearch(arr, 1, 0, 2), 0)
  t.is(binarySearch(arr, 3, 0, 2), 1)
  t.is(binarySearch(arr, 6, 0, 2), -1)
})