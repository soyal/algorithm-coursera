/**
 * 先进行拓扑排序，然后根据拓扑排序顺序进行节点放松，效率优于dijkstra，但是不能含有环
 */
import TopoLogical from '../directed-graph/topo-logical'

export default class AcyclicSP {
  _distTo = null  // 记录s到各节点的权值
  _edgeTo = null  // 记录s到各节点的路径

  constructor(G, s) {
    const len = G.V()
    this._distTo = new Array(len).fill(Number.POSITIVE_INFINITY)
    this._edgeTo = new Array(len).fill(null)

    this._distTo[s] = 0

    const order = new TopoLogical(G).order()
    order.forEach(node => {
      this.relax(G, node)
    })
  }

  /**
   * 将点放松，这段代码同dijkstra-sp
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
}