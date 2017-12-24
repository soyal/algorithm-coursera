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
  _s = -1  // 源节点

  /**
   * 
   * @param {Graph} G 图
   * @param {Number} s 起始节点
   */
  constructor(G, s) {
    this._marked = (new Array(G.getV())).fill(false)
    this._s = s
    this.dfs(G, s)
  }

  /**
   * 
   * @param {Graph} G 
   * @param {Number} v 搜索的目标节点
   */
  dfs(G, v) {
    this._marked[v] = true
    this._count++

    // 获取所有相邻的节点
    const adjs = G.getAdj(v)

    adjs.forEach((node) => {
      if (!this._marked[node]) {
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


/**
 * 深度优先路径
 */
export class DepthFirstPaths {
  _marked = []  // 记录源节点到对应的节点是否连通
  _s = -1  // 源节点
  _edgeTo = [] // 记录到每个节点的上一个节点

  /**
   * 
   * @param {Graph} G 图
   * @param {Number} s 源节点
   */
  constructor(G, s) {
    this._marked = new Array(G.getV()).fill(false)
    this._edgeTo = new Array(G.getV()).fill(-1)
    this._s = s

    this.dsf(G, s)
  }

  /**
   * 源节点与v节点是否有连通路径
   */
  hasPathTo(v) {
    return this._marked[v]
  }

  /**
   * 获取源节点与v的连通路径
   * @param {*} v 
   */
  pathTo(v) {
    if (!this.hasPathTo(v)) return null

    const paths = []

    for (let x = v; x !== this._s; x = this._edgeTo[x]) {
      paths.push(x)
    }

    paths.push(this._s)

    return paths
  }

  /**
   * 深度优先搜索
   * @param {Graph} G 
   * @param {Number} v 搜索起点
   */
  dsf(G, v) {
    this._marked[v] = true

    const adj = G.getAdj(v)  // 获取相邻节点集合

    adj.forEach((node) => {
      if (!this._marked[node]) {
        this._edgeTo[node] = v
        this.dsf(G, node)
      }
    })
  }

}

export class BreadthFirstPaths {
  _marked = []  // 用于标记起点和目标节点是否连通
  _edgeTo = []  // 用于标记连接目标节点的上一个节点
  _s = -1  // 起点
  _count = 0  // 与起点连通的节点个数

  constructor(G, s) {
    this._marked = new Array(G.getV()).fill(false)
    this._edgeTo = new Array(G.getV())
    this._s = s
    this.bst(G, s)
  }

  /**
   * 
   * @param {Graph} G 
   * @param {Number} v 目标节点
   */
  bst(G, v) {
    const queue = []
    queue.push(v)
    this._marked[v] = true

    while(queue.length > 0) {
      const node = queue.shift()
      const adj = G.getAdj(node)

      adj.forEach((_n) => {
        if(!this._marked[_n]) {
          // 将节点标记为连通，推入检索队列，设置其上一个连通节点
          this._marked[_n] = true
          queue.push(_n)
          this._edgeTo[_n] = node
          this._count ++
        }
      })
    }
  }

  hasPathTo(v) {
    return this._marked[v]
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) return null

    const paths = []

    for (let x = v; x !== this._s; x = this._edgeTo[x]) {
      paths.push(x)
    }

    paths.push(this._s)

    return paths
  }
}