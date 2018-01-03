/**
 * 深度优先搜索，可以从给定的一组节点开始，得知能到达哪些节点
 */
export default class DirectedDFS {
  _marked = null // 用于判断节点是否被标记

  /**
   *
   * @param {DiGraph} G 有向图
   * @param {Array<Number>} sources 一组节点
   */
  constructor(G, sources) {
    this._marked = new Array(G.V()).fill(false)

    for (let v = 0, len = sources.length; v < len; v++) {
      if (!this._marked[v]) {
        this.dfs(G, v)
      }
    }
  }

  dfs(G, v) {
    this._marked[v] = true

    const adj = G.adj(v)

    adj.forEach(e => {
      if (!this._marked[e]) {
        this.dfs(G, e)
      }
    })
  }

  marked(v) {
    return this._marked[v]
  }
}
