/**
 * 高位优先的字符串排序
 */
export default class MSD {
  static _R = 256 // key的分组长度
  static _aux = [] // 辅助数组，用于回写

  static charAt(str, d) {
    if (d < str.length) {
      return str.charCodeAt(d)
    } else {
      return -1
    }
  }
  /**
   * @param {Array<String>} a 待排序的字符串数组
   */
  static sort(a) {
    const len = a.length
    return this._sort(a, 0, len - 1, 0)
  }

  /**
   *
   * @param {Array<String>} a
   * @param {Number} start 要排序的起始位置
   * @param {Number} end 要排序的结束位置
   * @param {Number} d 字符串排序目标的索引
   */
  static _sort(a, start, end, d) {
    if (end <= start) return

    const count = new Array(this._R + 2).fill(0)

    // 统计频率
    for (let i = start; i <= end; i++) {
      const item = a[i]
      count[this.charAt(item, d) + 2]++
    }

    // 将频率转换为起始索引
    for (let r = 0; r <= this._R; r++) {
      count[r + 1] += count[r]
    }

    // 按照起始索引将数组排序入辅助数组aux
    for (let i = start; i <= end; i++) {
      const item = a[i]
      const index = count[this.charAt(item, d) + 1]++
      this._aux[index] = item
    }

    // 数据回写
    for (let i = start; i <= end; i++) {
      a[i] = this._aux[i - start]
    }

    // 在每个相同的字符内进行排序
    for (let r = 0; r < this._R; r++) {
      this._sort(a, start + count[r], start + count[r + 1] - 1, d + 1)
    }

    return a
  }
}
