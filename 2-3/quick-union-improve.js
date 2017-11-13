/**
 * 快速合并(加权)
 */
class QuickUnion {
  ids = []
  size = []
  /**
   * 初始化数组
   * @param {*} length 
   */
  init(length) {
    for(let i=0; i < length; i++) {
      this.ids[i] = i
      this.size[i] = 1  // +++
    }
  }

  /**
   * 返回根节点的索引值
   * @param {Number} index 要查询的索引值
   */
  root(index) {
    const ids = this.ids
    // 当值和索引不相等时，不是根节点
    while(ids[index] !== index) {
      // 将树平铺开
      if(ids[index] !== ids[ids[index]]) {
        ids[index] = ids[ids[index]]
      }
      index = ids[index]
    }

    return index
  }

  /**
   * 两个节点是否是连通的
   */
  isConnected(n1, n2) {
    // 相同根节点的两个元素是连通的
    return this.root(n1) === this.root(n2)
  }

  /**
   * 连通操作
   */
  union(n1, n2) {
    const n1Root = this.root(n1)
    const n2Root = this.root(n2)
    
    // +++
    if(this.size[n1Root] > this.size[n2Root]) {
      this.ids[n2Root] = n1Root
      this.size[n1Root] += this.size[n2Root]
    } else {
      this.ids[n1Root] = n2Root
      this.size[n2Root] += this.size[n1Root]
    }
  }
}