/**
 * 红黑二叉查找树
 */
export const RED = true
export const BLACK = false

export class Node {
  key = 0
  value = 0
  color = RED
  N = 1
  left = null
  right = null

  constructor(key, value, color, N) {
    this.key = key
    this.value = value
    this.color = color
    this.N = N
  }
}

export class RedBlackBST {
  root = null

  size() {
    return this._size(this.root)
  }

  _size(node) {
    if (node === null) return 0

    return node.N
  }

  /**
   * 检测节点是否为红色节点
   * @param {Node} node
   */
  _isRed(node) {
    if (node === null) return false

    return node.color === RED
  }

  /**
   * 节点左旋转
   * @param {Node} node 
   */
  _rotateLeft(node) {
    if (node === null) return null

    const _r = node.right
    node.right = _r.left
    _r.left = node

    // 更改颜色
    _r.color = node.color
    node.color = RED

    // 更改N
    _r.N = node.N
    node.N = this._size(node.left) + this._size(node.right) + 1

    return _r
  }

  /**
   * 节点右旋转
   * @param {Node} node 
   */
  _rotateRight(node) {
    if (node === null) return null

    const _l = node.left
    node.left = _l.right
    _l.right = node

    _l.color = node.color
    node.color = RED

    _l.N = node.N
    node.N = this._size(node.left) + this._size(node.right) + 1

    return _l
  }

  /**
   * 转换左右为红链接的树的颜色
   * @param {Node} node 
   */
  _flipColor(node) {
    node.color = RED
    node.left.color = BLACK
    node.right.color = BLACK
  }

  /**
   * 插入操作
   * @param {String} key 
   * @param {String} value 
   */
  put(key, value) {
    this.root = this._put(this.root, key, value)
    this.root.color = BLACK
  }

  _put(node, key, value) {
    // 根节点为红色，说明是3-节点的一部分
    // 每次插入都以红链接的形式
    if (node === null) {
      return new Node(key, value, RED, 1)
    }

    if (key < node.key) {
      node.left = this._put(node.left, key, value)
      node.N ++
    } else if (key > node.key) {
      node.right = this._put(node.right, key, value)
      node.N ++
    } else {
      node.value = value
    }

    // 右侧为红，左侧为黑，左旋转
    if (this._isRed(node.right) && !this._isRed(node.left)) {
      node = this._rotateLeft(node)
    }

    // 连续两个左链接为红
    if (this._isRed(node.left) && this._isRed(node.left.left)) {
      node = this._rotateRight(node)
    }

    // 左右都为红链接
    if (this._isRed(node.left) && this._isRed(node.right)) {
      this._flipColor(node)
    }


    return node
  }
}