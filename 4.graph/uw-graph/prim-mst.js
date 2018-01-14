import IndexMinPQ from './index-min-pq'

/**
 * 即时Prim算法
 */
export default class PrimMst {
  _marked = null
  _edgeTo = null  // 记录距离节点最近的边
  _distTo = null  // _distTo[w] = _edgeTo[w].weight()  记录到节点的边的权值
  _pq = null  //MinIndexPQ,key为节点，value为权值 有效的横切边

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

    this._distTo[0] = 0
    this._pq.insert(0, 0)

    while(!this._pq.isEmpty()) {
      const minIndex = this._pq.delMin()
      this.visit(G, minIndex)
    }
  }

  /**
   * 标记v，更新v周围的节点到已经构筑的最小生成树的最短距离
   * @param {*} G 
   * @param {*} v 
   */
  visit(G, v) {
    this._marked[v] = true
    const adj = G.adj(v)
    
    for(let e of adj) {
      const w = e.other(v)
      if(this._marked[w]) continue

      // 已经生成的最小生成树通过该边到v的权值更小
      const weight = e.weight()
      if(weight < this._distTo[w]) {
        this._edgeTo[w] = e
        this._distTo[w] = weight
        if(this._pq.contains(w)) {
          this._pq.change(w, weight)
        } else {
          this._pq.insert(w, weight)
        }
      }
    }
  }

  edges() {

  }

  weight() {
    return this._distTo.reduce((sum, weight) => {
      if(Number.isFinite(weight)) {
        return sum + weight
      }

      return sum
    }, 0)
  }
}