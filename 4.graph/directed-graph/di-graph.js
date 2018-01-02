/**
 * 有向图类
 */

export default class Digraph {
  _V = 0 //顶点数
  _E = 0 // 边数量
  _adj = null // 存储所有节点对应的邻接节点集合

  constructor(V) {
    this._V = V

    this._adj = new Array(V)
    for (let i = 0; i < V; i++) {
      this._adj[i] = []
    }
  }

  addEdge(v, w) {
    this._adj[v].push(w)
    this._E++
  }

  V() {
    return this._V
  }

  E() {
    return this._E
  }

  /**
   * 获取邻接节点集合
   * @param {Number} v
   */
  adj(v) {
    return this._adj[v]
  }

  /**
   * 将有向图的所有边反向
   */
  reverse() {
    const len = this._V
    const graph = new Digraph(len)

    for (let v = 0; v < len; v++) {
      this.adj(v).forEach(e => {
        graph.addEdge(e, v)
      })
    }

    return graph
  }
}
