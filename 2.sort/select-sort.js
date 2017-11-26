import { exchange } from './common'

/**
 * 选择排序，最简单的排序算法
 * @param {Array} arr 数组
 */
export default (arr) => {
  const nArr = arr.slice()

  for (let i = 0, len = nArr.length; i < len; i++) {
    // 寻找每个索引的最小值
    let min = nArr[i], k

    for (let j = i + 1; j < len; j++) {
      if(nArr[j] < min) {
        min = nArr[j]
        k = j
      }
    }

    if(k) {
      exchange(nArr, i, k)
    }
  }

  return nArr
}