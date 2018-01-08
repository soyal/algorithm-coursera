import DepthFirstOrder from './depth-first-order'

/**
 * 利用kosaraju算法计算有向图的强连通分量
 */
export default class KosarajuSCC {
  _marked = []
  _id = []  // 强连通分量标识符
  _count = 0  // 强连通分量数量

  /**
   * 
   * @param {Digraph} G 有向图
   */
  constructor(G) {
    const len = G.V()
    this._marked = new Array(len).fill(false)
    this._id = new Array(len)

    // 以G反向图的逆后序进行深度优先搜索，每次递归调用的所有标记的顶点都在同一个强连通分量中
    // 证明：
    // 因为我们进行dfs，从s => v，所以存在s => v的路径，那么反向图中存在 v => s
    // 而因为我们的遍历顺序是反向图的逆后序，众所周知的是逆后序的存储结构是stack，那么可以说明v入栈比s入栈早
    // 即v的dfs结束得比s的dfs早
    // 那么存在两种情况
    // 1. dfs(v)start => dfs(v)end => dfs(s)start => dfs(s)end
    // 2. dfs(s)start => dfs(v)start => dfs(v)end => dfs(s)end
    // 如果是情况1，那么v和s是不连通的，但是我们已知在反向图中v和s连通，所以只能是情况2,
    // 情况2下，s和v是连通的
    // 因此，s 和 v强连通，证毕
    const order = new DepthFirstOrder(G.reverse())
    order.reversePost().forEach(s => {
      if(!this._marked[s]) {
        this.dfs(G, s)
        this._count ++
      }
    })
  }

  dfs(G, v) {
    this._marked[v] = true
    this._id[v] = this._count

    const adj = G.adj(v)

    adj.forEach(t => {
      if(!this._marked[t]) {
        this.dfs(G, t)
      }
    })
  }

  /**
   * v和w是否强连通
   * @param {*} v 
   * @param {*} w 
   */
  stronglyConnected(v, w) {
    return this._id[v] === this._id[w]
  }

  id(v) {
    return this._id[v]
  }

  count() {
    return this._count
  }
}