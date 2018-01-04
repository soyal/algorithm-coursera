/**
 * 寻找有向环
 */
export default class DirectedCycle {
  _marked = []  // 标记节点是否被访问过
  _edgeTo = []  // 用于记录路径
  _onStack = []  // 在同一条递归栈上的所有节点
  _cycle = null  // Stack 完整的环路径(如果有)

  /**
   * 
   * @param {DiGraph} G 有向图
   */
  constructor(G) {
    const len = G.V()
    this._marked = new Array(len).fill(false)
    this._edgeTo = new Array(len)
    this._onStack = new Array(len).fill(false)

    for(let s=0; s< len; s++) {
      if(!this._marked[s]) {
        this.dfs(G, s)
      }
    }
  }

  dfs(G, v) {
    this._marked[v] = true
    this._onStack[v] = true

    const adj = G.adj(v)
    adj.forEach(e => {
      if(this.hasCycle()) {
        return
      } else if(!this._marked[e]) {
        this._edgeTo[e] = v
        this.dfs(G, e)
      } else if(this._onStack[e]) {
        // 进入这里，表示已经形成了环
        this._cycle = []

        for(let x = v; x !== e; x = this._edgeTo[x]) {
          this._cycle.push(x)
        }
        this._cycle.push(e)
        this._cycle.push(v)
      }
    })

    this._onStack[v] = false
  }

  hasCycle() {
    return this._cycle !== null
  }

  cycle() {
    return this._cycle
  }
}