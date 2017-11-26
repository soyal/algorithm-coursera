/**
 * 快速合并
 */
class QuickUnion {
  ids = []

  /**
   * 初始化数组
   * @param {*} length 
   */
  init(length) {
    for(let i=0; i < length; i++) {
      this.ids[i] = i
    }
  }

  /**
   * 返回根节点的索引值
   * @param {Number} index 要查询的索引值
   */
  root(index) {
    // 当值和索引不相等时，不是根节点
    while(this.ids[index] !== index) {
      index = this.ids[index]
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

    // 将n1的根节点由自身设置为n2的根节点
    ids[n1Root] = n2Root
  }
}