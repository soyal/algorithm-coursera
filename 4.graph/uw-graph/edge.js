/**
 * 带权重的边
 */
export default class Edge {
  _v = -1 // 顶点之一
  _w = -1 // 另一个顶点
  _weight = 0 // 权重

  constructor(v, w, weight) {
    this._v = v
    this._w = w
    this._weight = weight
  }

  weight() {
    return this._weight
  }

  either() {
    return this._v
  }

  other(vertext) {
    if (vertext === this._v) {
      return this._w
    } else if (vertext === this._w) {
      return this._v
    } else {
      throw new Error('vertext不在该edge中')
    }
  }

  compareTo(edge) {
    if (this.weight() > edge.weight()) {
      return 1
    } else if (this.weight() < edge.weight()) {
      return -1
    } else {
      return 0
    }
  }

  toString() {
    return `${this._v}-${this._w} ${this._weight}`
  }
}
