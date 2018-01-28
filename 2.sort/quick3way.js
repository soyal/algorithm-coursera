/**
 * 三项切分快速排序，适用于排序重复元素较多的情况
 */
import { exchange } from './common'

export default function quick3way(arr, start, end) {
  if (start >= end) return

  let lt = start,
    gt = end,
    i = lt + 1
  const v = arr[lt]

  while (i <= gt) {
    if (arr[i] < v) {
      exchange(arr, lt++, i++)
    } else if (arr[i] > v) {
      exchange(arr, i, gt--)
    } else {
      i++
    }
  }

  quick3way(arr, start, lt - 1)
  quick3way(arr, gt + 1, end)
}
