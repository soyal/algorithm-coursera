import { Graph } from '../undirected-graph/graph'

/**
 * 符号图
 */
export default class SymbolGraph {
  st = null //Object, 符号名 => 索引
  keys = null //  Array, 索引 => 符号名
  graph = null // 图

  /**
   * @param {Array} input 输入, [[a,b], [c, d]],表示a和b相连,c和d相连
   */
  constructor(input) {
    const inputKeys = input.reduce((all, e) => {
      return all.concat(e)
    }, [])

    // 初始化st
    let st = (this.st = {})
    st.length = 0
    inputKeys.forEach(key => {
      if (st[key] === undefined) {
        st[key] = st.length
        st.length++
      }
    })

    // 初始化keys
    let keys = (this.keys = new Array(st.length))
    Object.keys(st).forEach(key => {
      if (key !== 'length') {
        keys[st[key]] = key
      }
    })

    // 初始化图
    let graph = (this.graph = new Graph(st.length))
    input.forEach(edge => {
      const index0 = st[edge[0]]
      const index1 = st[edge[1]]

      graph.addEdge(index0, index1)
    })
  }

  /**
   * 符号图中是否含有该键值
   * @param {String} key
   */
  contains(key) {
    return this.st[key] !== undefined
  }

  /**
   * 返回键值对应的索引
   * @param {String} key
   */
  index(key) {
    return this.st[key]
  }

  /**
   * 获取索引对应的键值
   * @param {Number} index
   */
  name(index) {
    return this.keys[index]
  }

  /**
   * @return {Graph}
   * 获取图
   */
  G() {
    return this.graph
  }
}
