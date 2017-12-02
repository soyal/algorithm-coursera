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
  let i = start, j = end + 1
  const flag = arr[start]

  while (i < j) {
    // 分别移动i,j,左侧找到比flag大的元素，右侧找到比flag小的元素，然后将它们交换
    while (arr[++i] < flag) {
      if (i > end) {
        break
      }
    }

    while (arr[--j] > flag) {
      if (j < start) {
        break
      }
    }

    if (i >= j) break

    exchange(arr, i, j)
  }

  exchange(arr, start, j)

  return j
}


/**
 * 网上比较常见的快速排序
 * 俗称挖坑法
 */
export const quickSortNormal = (arr, start, end) => {
  if (start >= end) return

  // 先挖start位置
  let i = start, j = end
  let flag = arr[i]

  while (i < j) {
    // 从右侧数过来的value都比挖出来的value大
    while (arr[j] >= flag && j > i) {
      j--
    }

    if (i === j) break

    // 当前arr[j] < temp,将其挖出来填到i指向的空位上
    arr[i] = arr[j]
    i++

    // 从左侧往右侧数的value都小于flag的情况
    while (arr[i] <= flag && i < j) {
      i++
    }

    if (i === j) break

    // arr[i] > flag
    arr[j] = arr[i]
    j--
  }

  arr[j] = flag

  // 递归排序左侧
  quickSortNormal(arr, start, j - 1)
  // 递归排序右侧
  quickSortNormal(arr, j + 1, end)

  return arr
}