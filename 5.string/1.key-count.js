/**
 * 键索引计数法，适用于小整数键排序，如对学生进行分组排序
 * @param {Array<Object>} arr key为number类型
 * @param {Number} R 分组数量
 */
export default function keyCount(arr, R) {
  // 记录频率
  const count = new Array(R + 1).fill(0)

  for (let obj of arr) {
    count[obj.key + 1]++
  }

  // 将频率转化成起始索引
  for (let i = 0; i < R; i++) {
    count[i + 1] += count[i]
  }

  // 分类
  const aux = new Array(arr.length)
  for (let i = 0; i < arr.length; i++) {
    aux[count[arr[i].key]++] = arr[i]
  }

  // 还原
  for (let i = 0; i < arr.length; i++) {
    arr[i] = aux[i]
  }

  return arr
}
