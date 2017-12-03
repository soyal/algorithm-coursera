import { exchange, equalArray } from './common'

/**
 * 基于堆的优先队列
 * tip: 为了方便计算子父节点的关系(p = c / 2)，索引都是从1开始，索引0不用
 */
class HeapPQ {
  maxLength = 0
  arr = null
  currentLength = 0

  constructor(length) {
    this.maxLength = length
    this.arr = new Array(length + 1)
    this.arr[0] = 0
  }

  getArr() {
    return this.arr
  }

  insert(value) {
    const maxLength = this.maxLength
    const arr = this.arr
    if (this.currentLength === maxLength) {
      this.delMax()
    }
    arr[++this.currentLength] = value
    this.swim(this.currentLength)
  }

  equal(expect) {
    const arr = this.arr.slice(1, this.currentLength + 1)

    return equalArray(arr, expect)
  }

  delMax() {
    if (this.currentLength === 0) return

    const arr = this.arr

    // 将根元素(最大元素)替换掉
    arr[1] = arr[this.currentLength]
    arr[this.currentLength] = null
    this.currentLength--

    this.sink(1)
  }

  // 子元素上浮
  swim(index) {
    let parent = parseInt(index / 2, 10)
    const arr = this.arr

    while (parent > 0 && this.less(parent, index)) {
      exchange(arr, index, parent)
      parent = parseInt(parent / 2, 10)
    }
  }

  // 父元素下沉
  sink(index) {
    let parent = index
    let child = parent * 2
    const arr = this.arr

    while (child <= this.currentLength) {
      if (this.less(child, child + 1)) child++

      if (!this.less(parent, child)) break

      exchange(arr, parent, child)

      parent = child
      child *= 2
    }
  }

  less(indexA, indexB) {
    const arr = this.arr
    return arr[indexA] < arr[indexB]
  }
}

export default HeapPQ