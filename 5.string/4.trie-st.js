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
   * 通配符匹配
   * @param {String} pattern 通配符 e.g .he可以匹配 she che the
   */
  keysThatMatch(pattern) {
    const queue = []

    this._collect2(this.root, '', pattern, queue)

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

  /**
   * 用于keysThatMatch
   * @param {*} node
   * @param {*} pre
   * @param {*} pattern
   * @param {*} queue
   */
  _collect2(node, pre, pattern, queue) {
    if (node === null) return

    const d = pre.length

    if (d === pattern.length && node.val !== null) {
      queue.push(pre)
    }
    if (d === pattern.length) return

    const pat = pattern.charAt(d)
    for (let c = 0; c < R; c++) {
      const nextChar = String.fromCharCode(c)
      if (pat === '.' || pat === nextChar) {
        this._collect2(node.next[c], pre + nextChar, pattern, queue)
      }
    }
  }

  /**
   * 查找str的最长前缀, e.g str=shells 返回shell
   * @param {String} str
   * @return {String}
   */
  longestPrefixOf(str) {
    const length = this._search(this.root, str, 0, 0)
    return str.substring(0, length)
  }

  /**
   *
   * @param {*} node
   * @param {*} str
   * @param {*} d
   * @param {*} length
   * @return {Number} prefix长度
   */
  _search(node, str, d, length) {
    if (node === null) return length

    if (node.val !== null) length = d

    if (d === str.length) return length

    const nextChar = str.charCodeAt(d)
    return this._search(node.next[nextChar], str, d + 1, length)
  }

  /**
   * 删除str这个单词
   * @param {String} str
   */
  delete(str) {
    this.root = this._delete(this.root, str, 0)
  }

  /**
   * 递归的删除操作
   * @param {Node} node
   * @param {String} str
   * @param {Number} d
   * @return {Node}
   */
  _delete(node, str, d) {
    if (node === null) return null

    const length = str.length

    if (length === d) {
      node.val = null
    } else {
      const charCode = str.charCodeAt(d)
      node.next[charCode] = this._delete(node.next[charCode], str, d + 1)
    }

    // node并不是此次删除的目标
    if (node.val !== null) return node

    // 要么本身没值,要么就是此次删除的目标,对其孩子进行遍历，如果都为null,删除自身，否则不删除
    for (let r = 0; r < R; r++) {
      if (node.next[r] !== null) return node
    }

    return null
  }
}
