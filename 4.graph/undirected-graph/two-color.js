/**
 * 无向图，双色问题(二分图，即每条边的两个节点为不同的颜色)
 */

export class TwoColor {
  _marked = []
  _isTwoColorable = true  // 是否是二分图
  _colors = []  // Array<Boolean>用来标记每个顶点颜色的数组

  constructor(G) {
    const nodeLen = G.getV()
    this._marked = new Array(nodeLen).fill(false)
    this._colors = new Array(nodeLen)

    for (let i = 0; i < nodeLen; i++) {
      if(!this._marked[i]) {
        this._colors[i] = true
        this.dfs(G, i)
      }
    }
  }

  /**
   * 深度优先搜索
   * @param {Graph} G 
   * @param {Number} v 要搜索的节点 
   */
  dfs(G, v) {
    const _ma = this._marked
    const _co = this._colors
    _ma[v] = true

    G.getAdj(v).forEach(_ad => {
      if(!_ma[_ad]) {
        _co[_ad] = !_co[v]
        this.dfs(G, _ad)
        // 被标记且与v颜色相同
      } else if(_co[_ad] === _co[v]) {
        this._isTwoColorable = false
      }
    })
  }

  isTwoColorable() {
    return this._isTwoColorable
  }
}