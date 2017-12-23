/**
 * 无向图
 */
export class Graph {
  V = 0  // 顶点数目
  E = 0  // 边的数目
  adj = []  // 邻接表 相邻的顶点集合

  constructor(V) {
    this.V = V

    // 初始化所有邻接表
    for (let i = 0, len = V; i < len; i++) {
      this.adj[i] = []
    }
  }

  getV() {
    return this.V
  }

  getE() {
    return this.E
  }

  getAdj(v) {
    return this.adj[v]
  }

  addEdge(v, w) {
    const adj = this.adj
    adj[v].push(w)
    adj[w].push(v)

    this.E++
  }
}

/**
 * 深度优先搜索
 */
export class DepthFirstSearch {
  _marked = []  // 用于判断与其他节点是否连通的数组
  _count = 0  // 与该节点连通的所有的节点的数量

  /**
   * 
   * @param {Graph} G 图
   * @param {Number} s 起始节点
   */
  constructor(G, s) {
    this._marked = (new Array(G.getV())).fill(false)
    this.dfs(G, s)
  }

  /**
   * 
   * @param {Graph} G 
   * @param {Number} v 搜索的目标节点
   */
  dfs(G, v) {
    this._marked[v] = true
    this._count ++ 

    // 获取所有相邻的节点
    const adjs = G.getAdj(v)

    adjs.forEach((node) => {
      if(!this._marked[node]) {
        this.dfs(G, node)
      }
    })
  }

  /**
   * source节点是否与v节点连通
   * @param {Number} v 
   */
  marked(v) {
    return this._marked[v]
  }

  /**
   * 与source节点连通的总数
   */
  count() {
    return this._count
  }
}