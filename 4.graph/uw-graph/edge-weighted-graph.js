/**
 * 带权重的无向图
 */
export default class EdgeWeightedGraph {
  _V = 0 // 顶点总数
  _E = 0 // 边的总数
  _adj = null //Array<Array<Edge>> 存储所有顶点的相邻边

  /**
   *
   * @param {Number} v 顶点个数
   */
  constructor(v) {
    this._V = v
    this._adj = new Array(v)
    for (let i = 0; i < v; i++) {
      this._adj[i] = []
    }
  }

  /**
   * 添加边
   * @param {Edge} edge
   */
  addEdge(edge) {
    const v = edge.either(),
      w = edge.other(v)

    this._adj[v].push(edge)
    this._adj[w].push(edge)
    this._E++
  }

  V() {
    return this._V
  }

  E() {
    return this._E
  }

  /**
   * 获取顶点的所有相邻边
   * @param {Number} v 顶点
   * @return {Array<Edge>}
   */
  adj(v) {
    return this._adj[v]
  }

  /**
   * 返回加权无向图的所有边
   * @return {Array<Edge>}
   */
  edges() {
    const edges = []
    for (let v = 0, len = this._V; v < len; v++) {
      this._adj[v].forEach(e => {
        if (e.other(v) > v) {
          edges.push(e)
        }
      })
    }

    return edges
  }
}
