/**
 * 基于深度优先搜索的顶点排序
 */
export default class DepthFirstOrder {
  _marked = []
  _pre = [] // 前序排列(队列)
  _post = [] // 后序排列(队列)
  _reversePost = [] // 逆后序排列(栈)

  /**
   *
   * @param {DiGraph} G 有向图
   */
  constructor(G) {
    const len = G.V()
    this._marked = new Array(len).fill(false)

    for (let s = 0; s < len; s++) {
      if(!this._marked[s]) {
        this.dfs(G, s)
      }
    }
  }

  /**
   * 深度优先搜索
   * @param {*} G 
   * @param {*} s 
   */
  dfs(G, s) {
    const { _marked, _pre, _post, _reversePost } = this

    _marked[s] = true
    _pre.push(s)

    const adj = G.adj(s)
    adj.forEach(v => {
      if(!_marked[v]) {
        this.dfs(G, v)
      }
    })

    _post.push(s)
    _reversePost.unshift(s)
  }

  pre() {
    return this._pre
  }

  post() {
    return this._post
  }

  reversePost() {
    return this._reversePost
  }
}
