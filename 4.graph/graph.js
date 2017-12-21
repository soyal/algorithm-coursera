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

  V() {
    return this.V
  }

  E() {
    return this.E
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
  marked = []  // 用于判断与其他节点是否连通的数组
  count = 0  // 与该节点连通的所有的节点的数量

  /**
   * 
   * @param {Graph} G 图
   * @param {Number} s 起始节点
   */
  constructor(G, s) {
    this.marked = new Array(G.V())
    this.dfs(G, s)
  }

  /**
   * 
   * @param {Graph} G 
   * @param {Number} v 搜索的目标节点
   */
  dfs(G, v) {
    this.marked[v] = true
    this.count ++ 

    // 获取所有相邻的节点
    const adjs = G.adj(v)

    adjs.forEach((node) => {
      if(!this.marked[node]) {
        this.dfs(G, node)
      }
    })
  }

  marked(v) {
    return this.marked[v]
  }

  count() {
    return this.count
  }
}