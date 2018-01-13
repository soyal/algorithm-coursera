import MinPQ from './min-queue'
/**
 * 延时Prim算法
 */
export default class LazyPrimMST {
  _marked = null // 记录节点被标记的情况
  _pq = null // 横切边 {MinPQ}
  _mst = [] //  最小生成树的所有边

  /**
   *
   * @param {EWGraph} G 带权重的无向图
   */
  constructor(G) {
    this._marked = new Array(G.V()).fill(false)
    this._pq = new MinPQ()

    this.visit(G, 0)

    while (!this._pq.isEmpty()) {
      const minEdge = this._pq.delMin()
      const v = minEdge.either(),
        w = minEdge.other(v)
      const marked = this._marked

      if (marked[v] && marked[w]) continue

      this._mst.push(minEdge)
      if (!marked[v]) {
        this.visit(G, v)
      }

      if (!marked[w]) {
        this.visit(G, w)
      }
    }
  }

  /**
   * 标记v,并将和v相邻的边加入pq
   * @param {EWGraph} G
   * @param {number} v
   */
  visit(G, v) {
    this._marked[v] = true
    const adj = G.adj(v)

    adj.forEach(e => {
      if (!this._marked[e.other(v)]) {
        this._pq.insert(e)
      }
    })
  }

  /**
   * 返回最小生成树的所有边
   */
  edges() {
    return this._mst
  }

  /**
   * 计算最小生成树的权重
   */
  weight() {
    return this._mst.reduce((sum, e) => {
      return sum + e.weight()
    }, 0)
  }
}
