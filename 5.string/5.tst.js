/**
 * 三向单词查找树
 */
class Node {
  c = null // String,当前节点指代的字符
  left = null // 左节点
  right = null // 右节点
  mid = null // 中节点
  val = null // 值
}

export default class TST {
  root = null // Node

  get(key) {
    const result = this._get(this.root, key, 0)
    return result === null ? null : result.val
  }

  put(key, val) {
    this.root = this._put(this.root, key, val, 0)
  }

  _get(node, key, d) {
    if (node === null) return null

    const char = key.charAt(d)
    if (char < node.c) {
      return this._get(node.left, key, d)
    } else if (char > node.c) {
      return this._get(node.right, key, d)
    } else if (d < key.length - 1) {
      return this._get(node.mid, key, d + 1)
    } else {
      return node
    }
  }

  _put(node, key, val, d) {
    const char = key.charAt(d)
    if (node === null) {
      node = new Node()
      node.c = char
    }

    if (char < node.c) {
      node.left = this._put(node.left, key, val, d)
    } else if (char > node.c) {
      node.right = this._put(node.right, key, val, d)
    } else if (d < key.length - 1) {
      node.mid = this._put(node.mid, key, val, d + 1)
    } else {
      node.val = val
    }

    return node
  }
}
