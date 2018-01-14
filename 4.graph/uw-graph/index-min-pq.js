/**
 * 关联索引的优先队列
 */
export default class IndexMinPQ {
  _pq = null
  _length = 0
  _minIndex = -1  // 最小值索引
  _maxLength = 0

  constructor(maxN) {
    this._maxLength = maxN
    this._pq = new Array(maxN).fill(null)
  }

  /**
   * 插入操作
   * @param {Number} k 索引
   * @param {Number} item value
   */
  insert(k, item) {
    this._pq[k] = item
    this._length++
    
    if(this._minIndex === -1 || this._pq[this._minIndex] > item) {
      this._minIndex = k
    }
  }

  /**
   * 更改操作
   * @param {Number} k 索引
   * @param {Number} item value
   */
  change(k, item) {
    if(k >= this._maxLength) return

    if (!this.contains(k)) {
      this._length++
    }
    this._pq[k] = item
    this._findMinIndex()
  }

  /**
   * 该索引是否有值
   * @param {Number} k
   */
  contains(k) {
    return this._pq[k] !== null
  }

  delete(k) {
    this._pq[k] = null
    this._length --
    this._findMinIndex()
  }

  minIndex() {
    return this._minIndex
  }

  isEmpty() {
    return this._length === 0
  }

  size() {
    return this._length
  }

  /**
   * 删除最小元素且返回它的索引
   */
  delMin() {
    const index = this._minIndex
    this.delete(index)

    return index
  }

  _findMinIndex() {
    let minIndex = 0, notFound = false
    this._pq.forEach((e, index) => {
      if(this._pq[minIndex] === null) {
        if((index === this._maxLength - 1) && e === null) {
          notFound = true
          return
        }
        minIndex = index
      } else if(e !== null && e < this._pq[minIndex]) {
        minIndex = index
      } 
    })

    if(notFound) {
      this._minIndex = -1  
    } else {
      this._minIndex = minIndex
    }
  }
}
