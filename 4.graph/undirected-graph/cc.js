/**
 * 使用深度优先搜索找出图中的连通分量
 */
export default class CC {
  _marked = null  // 用于标记节点是否被查询过
  _count = 0  // 连通分量的分组
  _id = null  // 记录节点与连通分量的对应关系

  /**
   * 
   * @param {Graph} G 
   */
  constructor(G) {
    const len = G.getV()

    this._marked = new Array(len).fill(false)
    this._id = new Array(len)

    // 遍历所有顶点
    for (let v = 0; v < len; v++) {
      if (!this._marked[v]) {
        this.dfs(G, v)
        this._count++
      }
    }
  }

  dfs(G, v) {
    this._marked[v] = true
    this._id[v] = this._count

    const adjs = G.getAdj(v)

    // 开始递归遍历v的邻接节点
    for (let w of adjs) {
      if(!this._marked[w]) {
        this.dfs(G, w)
      }
    }
  }

  connected(v, w) {
    return this._id[v] === this._id[w]
  }

  id(v) {
    return this._id[v]
  }

  count() {
    return this._count
  }
}