/**
 * 检测图是否含有环
 */
export class Cycle {
  _marked = []
  _hasCycle = false // 是否含有环

  constructor(G) {
    const nodeLen = G.getV()
    this._marked = new Array(nodeLen).fill(false)

    // 预处理
    for (let i = 0; i < nodeLen; i++) {
      if (!this._marked[i]) {
        this.dfs(G, i, i)
      }
    }
  }

  /**
   * 深度优先搜索
   * @param {Graph} G 图
   * @param {Number} v 要搜索的节点
   * @param {Number} u 要搜索的节点的上一个节点
   */
  dfs(G, v, u) {
    const _ma = this._marked
    _ma[v] = true

    G.getAdj(v).forEach((node) => {
      if (!_ma[node]) {
        this.dfs(G, node, v)
      } else if (node !== u) {
        this._hasCycle = true
      }
    })
  }

  hasCycle() {
    return this._hasCycle
  }
}