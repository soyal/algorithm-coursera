/**
 * Dijkstra算法求最短路径
 */
import IndexMinPQ from '../uw-graph/index-min-pq'

export default class DijkstraSP {
  _edgeTo = null // Array<DirectedEdge>
  _distTo = null // Array<Number> 到v的路径的权值之和
  _pq = null // IndexMinPQ

  constructor(G, s) {
    const len = G.V()
    this._edgeTo = new Array(len).fill(null)
    this._distTo = new Array(len).fill(Number.POSITIVE_INFINITY)
    this._distTo[s] = 0
    this._pq = new IndexMinPQ(len)

    this._pq.insert(s, 0)
    while (!this._pq.isEmpty()) {
      this.relax(G, this._pq.delMin())
    }
  }

  /**
   * 将点放松
   * @param {*} G 
   * @param {*} v 
   */
  relax(G, v) {
    G.adj(v).forEach(e => {
      const target = e.to()
      const weight = this._distTo[v] + e.weight()
      if(this._distTo[target] > weight) {
        
        this._distTo[target] = weight
        this._edgeTo[target] = e
        if(this._pq.contains(target)) {
          this._pq.change(target, weight)
        } else {
          this._pq.insert(target, weight)
        }
      }
    })
  }

  /**
   * 返回s到v的距离
   * @param {Number} v
   */
  distTo(v) {
    return this._distTo[v]
  }

  hasPathTo(v) {
    return this._distTo[v] < Number.POSITIVE_INFINITY
  }

  /**
   * 返回s到v的路径
   * @param {Number} v 
   * @return {Array<Edge>}
   */
  pathTo(v) {
    if(!this.hasPathTo(v)) return null

    const paths = []
    for(let e = this._edgeTo[v]; e !==null; e = this._edgeTo[e.from()]) {
      paths.push(e)
    }

    return paths.reverse()
  }
}
