/**
 * 单词查找树
 */
const R = 256
/**
 * 节点
 */
class Node {
  val = null
  next = new Array(R).fill(null)
}

export default class TrieST {
  root = null // 单词查找树的根节点

  /**
   * @param {String} key
   * @return {Number}
   */
  get(key) {
    const result = this._get(this.root, key, 0)
    return result === null ? null : result.val
  }

  /**
   * 查找以node为根节点的与key关联的节点
   * @return {Node}
   */
  _get(node, key, d) {
    if (node === null) return null

    if (key.length === d) return node

    const keyCode = key.charCodeAt(d)
    return this._get(node.next[keyCode], key, d + 1)
  }

  put(key, value) {
    this.root = this._put(this.root, key, value, 0)
  }

  /**
   * 向以node为根节点的单词树依次添加key
   * @param {*} node
   * @param {*} key
   * @param {*} value
   * @param {*} d
   */
  _put(node, key, value, d) {
    if (node === null) {
      node = new Node()
    }

    if (key.length === d) {
      node.val = value
      return node
    }

    const keyCode = key.charCodeAt(d)
    node.next[keyCode] = this._put(node.next[keyCode], key, value, d + 1)
    return node
  }

  /**
   * 获取单词查找树中的所有单词
   */
  keys() {
    return this.keysWithPrefix('')
  }

  /**
   * 查找以pre开头的所有单词
   * @param {String} pre
   * @return {Array<String>}
   */
  keysWithPrefix(pre) {
    const queue = []
    this._collect(this._get(this.root, pre, 0), pre, queue)
    return queue
  }

  /**
   * 查找以node为根节点，前缀是pre的有val的所有单词，将其放进queue中
   * @param {*} node
   * @param {*} pre
   * @param {*} queue
   */
  _collect(node, pre, queue) {
    if (node === null) return null

    if (node.val !== null) queue.push(pre)

    for (let r = 0; r < R; r++) {
      this._collect(node.next[r], pre + String.fromCharCode(r), queue)
    }
  }
}
