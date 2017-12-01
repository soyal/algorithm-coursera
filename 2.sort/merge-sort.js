
/**
 * 合并两个有序序列
 * @param {Array} arr
 * @param {Number} start 要排序的开始位置
 * @param {Number} mid 划分点
 * @param {Number} end 要排序的结束位置
 */
export const merge = (arr, start, mid, end) => {
  let i = start, j = mid + 1
  let k = 0
  const temp = []

  // 先将arr要排序的序列排好后放入temp
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++]
    } else {
      temp[k++] = arr[j++]
    }
  }

  if (i > mid) {
    while (j <= end) {
      temp[k++] = arr[j++]
    }
  }

  if (j > end) {
    while (i <= mid) {
      temp[k++] = arr[i++]
    }
  }
  // 然后再将排好序的temp 回倒进arr里面
  for (let i = 0; i < k; i++) {
    arr[start + i] = temp[i]
  }

  return arr
}

/**
 * 自顶向下的归并排序
 * 归(递归)并(合并)
 */
export const mergeSortUB = (arr, start, end) => {
  if (start >= end) return

  const mid = parseInt((start + end) / 2, 10)

  mergeSortUB(arr, start, mid)
  mergeSortUB(arr, mid + 1, end)
  merge(arr, start, mid, end)

  return arr
}


/**
 * 自底向上的归并排序
 * @param {*} arr 
 */
export const mergeSortBU = (arr) => {
  const length = arr.length
  
// console.log('....before: ', arr)
  // 就是依次 一一合并 二二合并 四四合并...
  for (let size = 1; size < length; size *= 2) {
    for (let start = 0; start < length - size; start += (2 * size)) {
      const mid = start + size - 1
      const end = Math.min(start + 2 * size - 1, length - 1)
      merge(arr, start, mid, end)
    }
    // console.log(`....size: ${size}`, arr)
  }

  return arr
} 