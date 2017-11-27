import { exchange } from './common'

/**
 * 希尔排序
 * 在插入排序的基础上，先进行宏观上的插入排序，即以增量递减的方式循环进行插入排序
 */
export default (arr) => {
  const nArr = arr.slice()

  // d为增量，为了方便，我们每次设初始增量为arr.length /2取整，之后增量每次打对折
  for (let d = parseInt(nArr.length / 2, 10); d > 0; d = parseInt(d / 2, 10)) {
    // 跨组循环，增量越大，分组越多
    for (let i = 0; i < d; i++) {
      // j 初始值是每组的第二个索引值
      for (let j = i + d; j < nArr.length; j += d) {
        for (let k = j; k - d >= 0 && nArr[k] < nArr[k - d]; k -= d) {
          exchange(nArr, k - d, k)
        }
      }
    }
  }

  return nArr
}