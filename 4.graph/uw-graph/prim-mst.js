import IndexMinPQ from './index-min-pq'

/**
 * 即时Prim算法
 */
export default class PrimMst {
  _marked = null
  _edgeTo = null  // 记录距离节点最近的边
  _distTo = null  // _distTo[w] = _edgeTo[w].weight()  记录到节点的边的权值
  _pq = null  //MinIndexPQ, 有效的横切边

  /**
   * 
   * @param {EWGraph} G 无向加权图
   */
  constructor(G) {
    const len = G.V()

    this._marked = new Array(len).fill(false)
    this._edgeTo = new Array(len).fill(null)
    this._distTo = new Array(len).fill(Number.POSITIVE_INFINITY)
    this._pq = new IndexMinPQ(len)

    
  }

  visit() {

  }

  edges() {

  }

  weight() {

  }
}