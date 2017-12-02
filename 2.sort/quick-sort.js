/**
 * 快速排序
 */
import { exchange } from './common'

/**
 * 基础的快排，这个是书上的写法
 */
export const quickSortBase = (arr, start, end) => {
  if (start >= end) return

  // 先排序依次，得到划分点
  const j = _sort(arr, start, end)
  // 然后排序左侧
  quickSortBase(arr, start, j - 1)
  // 排序右侧
  quickSortBase(arr, j + 1, end)

  return arr
}

export const _sort = (arr, start, end) => {
  let i = start + 1, j = end
  const flag = arr[start]

  while (true) {
    // 分别移动i,j,左侧找到比flag大的元素，右侧找到比flag小的元素，然后将它们交换
    while (arr[i] < flag) {
      if(i >= j) {
        break
      } else {
        i ++
      }
    }

    while (arr[j] > flag) {
      if( j <= i) {
        break
      } else {
        j--
      }
    }

    if (i >= j) break

    exchange(arr, i, j)
  }

  exchange(arr, start, j)

  return j
}