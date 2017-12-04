/**
 * 堆排序
 * 为了统一，这里的堆都是最大堆
 * tip: 同样的，这里arr[0]也是没用的
 */
import { exchange } from './common'

/**
 * 下沉
 * @param {Number} N 要沉降的边界值
 */
export const sink = (arr, index, N) => {
  let parent = index
  let childIndex = index * 2

  while (childIndex <= N) {
    if (childIndex + 1 <= N && arr[childIndex] < arr[childIndex + 1]) childIndex++

    // 父亲比最大的孩子都要大，堆顺序正常，跳出
    if (arr[parent] >= arr[childIndex]) break

    exchange(arr, parent, childIndex)
    parent = childIndex
    childIndex = parent * 2
  }

  return arr
}

export const sort = (arr, N) => {

  for(let k = parseInt(N/2, 10); k >= 1; k --) {
    // 构建有序堆
    sink(arr, k, N)
  }

  // 移除最大值，将最大值和末尾的子元素交换，然后沉降子元素
  while(N >= 1) {
    exchange(arr, 1, N--)
    sink(arr, 1, N)
  }

  return arr
}