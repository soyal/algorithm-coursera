/**
 * 低位优先的字符串排序，适用于定长字符串数组
 * @param {Array<String>} arr
 * @param {Number} width 字符串宽度
 */
export default function lsd(arr, width) {
  const N = arr.length
  const R = 256
  const aux = new Array(N) // 用于缓存数据
  
  for (let d = width - 1; d >= 0; d--) {
    // d为要排序的字符位置
    const count = new Array(R + 1).fill(0)
    // 统计频率
    for (let i = 0; i < N; i++) {
      count[arr[i].charCodeAt(d) + 1]++
    }

    // 将频率转换成起始索引
    for (let r = 0; r < R; r++) {
      count[r + 1] = count[r + 1] + count[r]
    }

    // 排序
    for (let i = 0; i < N; i++) {
      const item = arr[i]
      const code = item.charCodeAt(d)
      aux[count[code]++] = item
    }

    // 回溯
    for (let i = 0; i < N; i++) {
      arr[i] = aux[i]
    }
  }

  return arr
}
