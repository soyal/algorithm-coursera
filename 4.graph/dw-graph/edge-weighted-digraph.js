
export default class EdgeWeightedDigraph {
  _V = 0  // 顶点数量
  _E = 0 // 边的数量
  _adj = [] // 记录从顶点指出去的边

  /**
   * 
   * @param {Number} V 顶点数量
   */
  constructor(V) {
    this._V = V
    this._adj = [...Array(V)].map(() => {
      return []
    })
  }

  V() {
    return this._V
  }

  E() {
    return this._E
  }

  addEdge(e) {
    this._adj[e.from()].push(e)
    this._E ++
  }

  adj(v) {
    return this._adj[v]
  }

  /**
   * @return {Array<DirectedEdge>}
   */
  edges() {
    return this._adj.reduce((edges, e) => {
      return edges.concat(e)
    }, [])
  }
}