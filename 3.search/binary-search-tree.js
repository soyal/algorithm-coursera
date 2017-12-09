/**
 * 二叉查找树
 */

/**
 * 节点
 */
class Node {
  key = 0
  value = 0
  left = null  // 左节点
  right = null  // 右节点
  N = 0  // 以该node为根节点的树中的节点总数

  constructor(key, value, N) {
    this.key = key
    this.value = value
    this.N = N
  }
}

class BST {
  root = null

  size() {
    return this._size(this.root)
  }

  _size(node) {
    if (node === null) return 0

    return node.N
  }

  // 查询操作
  get(key) {
    return this._get(this.root, key)
  }

  _get(node, key) {
    if (node === null) return null

    if (key === node.key) {
      return node.value
    } else if (key < node.key) {
      return this._get(node.left, key)
    } else {
      return this._get(node.right, key)
    }
  }

  // 插入操作，返回插入树的根节点
  put(key, value) {
    this.root = this._put(this.root, key, value)
  }

  _put(node, key, value) {
    if (node === null) {
      return new Node(key, value, 1)
    }

    // 相等就更新
    if (node.key === key) {
      node.value = value
    } else if (key < node.key) {
      node.left = this._put(node.left, key, value)
    } else {
      node.right = this._put(node.right, key, value)
    }

    // 更新N
    node.N = this._size(node.left) + this._size(node.right) + 1

    return node
  }

  /**
   * 返回最小节点
   * @return {Node}
   */
  min() {
    return this._min(this.root)
  }

  _min(node) {
    if (node === null) return null
    if (node.left === null) return node
    return this._min(node.left)
  }

  /**
   * 返回小于等于key的节点中最大的节点
   * @param {Number} key 
   * @return {Node}
   */
  floor(key) {
    return this._floor(this.root, key)
  }

  _floor(node, key) {
    if (node === null) return null

    if (node.key === key) {
      return node
    } else if (key < node.key) {
      return this._floor(node.left, key)
    } else {
      const _r = this._floor(node.right, key)
      if(_r === null) return node

      return _r
    }
  }

  /**
   * 返回键大于等于key的节点中最小的节点
   * @param {Number} key 
   * @return {Node}
   */
  ceil(key) {
    return this._ceil(this.root, key)
  }

  _ceil(node, key) {
    if(node === null) return null

    if(key === node.key) {
      return node
    } else if(key > node.key) {
      return this._ceil(node.right, key)
    } else {
      const _l = this._ceil(node.left, key)
      if(_l === null) return node

      return _l
    }
  }
}

export default BST