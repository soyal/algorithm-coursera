import DirectedCycle from './directed-cycle'
import DepthFirstOrder from './depth-first-order'

/**
 * 拓扑排序
 */
export default class Topological {
  _order = null

  constructor(G) {
    const cycle = new DirectedCycle(G)

    if(!cycle.hasCycle()) {
      const dfo = new DepthFirstOrder(G)
      this._order = dfo.reversePost()
    }
  }

  /**
   * 是有向无环图吗
   */
  isDAG() {
    return this._order !== null
  }

  /**
   * 拓扑有向的所有顶点(第一个为最顶点)
   */
  order() {
    return this._order
  }
}