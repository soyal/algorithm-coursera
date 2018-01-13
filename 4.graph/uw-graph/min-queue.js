/**
 * 优先队列，图方便，只是实现了优先队列的接口，没有基于堆实现
 */
export default class MinPQ {
  _pq = [] // 从大到小排

  insert(e) {
    this._pq.push(e)
    this._pq.sort((e1, e2) => {
      return e2.weight() - e1.weight()
    })
  }

  isEmpty() {
    return this._pq.length === 0
  }

  delMin() {
    return this._pq.pop()
  }
}
