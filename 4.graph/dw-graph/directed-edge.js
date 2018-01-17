/**
 * 有向边
 */
export default class DirectedEdge {
  _v = -1 // 边的起点
  _w = -1 // 边的终点
  _weight = 0 // 边的权重

  constructor(v, w, weight) {
    this._v = v
    this._w = w
    this._weight = weight
  }

  weight() {
    return this._weight
  }

  from() {
    return this._v
  }

  to() {
    return this._w
  }

  toString() {
    return `${this._v}->${this._w} ${this._weight}`
  }
}