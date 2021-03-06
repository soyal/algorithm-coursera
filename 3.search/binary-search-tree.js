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
   * 返回最小节点的key
   * @return {Number}
   */
  min() {
    return this._min(this.root).key
  }

  _min(node) {
    if (node === null) return null
    if (node.left === null) return node
    return this._min(node.left)
  }

  /**
   * 返回小于等于key的节点中最大的节点的key
   * @param {Number} key 
   * @return {Number}
   */
  floor(key) {
    return this._floor(this.root, key).key
  }

  _floor(node, key) {
    if (node === null) return null

    if (node.key === key) {
      return node
    } else if (key < node.key) {
      return this._floor(node.left, key)
    } else {
      const _r = this._floor(node.right, key)
      if (_r === null) return node

      return _r
    }
  }

  /**
   * 返回键大于等于key的节点中最小的节点的key
   * @param {Number} key 
   * @return {Number}
   */
  ceil(key) {
    return this._ceil(this.root, key).key
  }

  _ceil(node, key) {
    if (node === null) return null

    if (key === node.key) {
      return node
    } else if (key > node.key) {
      return this._ceil(node.right, key)
    } else {
      const _l = this._ceil(node.left, key)
      if (_l === null) return node

      return _l
    }
  }

  /**
   * 返回小于排名为n(有n个节点的key比其小)的节点的key
   * @param {Number} n
   */
  select(n) {
    const target = this._select(this.root, n)
    return target && target.key
  }

  _select(node, n) {
    if (node === null) return null

    const _leftSize = this._size(node.left)
    if (n === _leftSize) {
      return node
    } else if (n < _leftSize) {
      return this._select(node.left, n)
    } else {
      return this._select(node.right, n - _leftSize - 1)
    }
  }

  /**
   * 返回指定键的排名
   * @param {Number} key 
   * @return {Number}
   */
  rank(key) {
    return this._rank(this.root, key)
  }

  _rank(node, key) {
    if (node === null) return 0

    if (key === node.key) {
      return this._size(node.left)
    } else if (key < node.key) {
      return this._rank(node.left, key)
    } else {
      return this._size(node.left) + 1 + this._rank(node.right, key)
    }
  }

  /**
   * 删除BST中key最小的节点
   */
  delMin() {
    this.root = this._delMin(this.root)
  }

  /**
   * 删除以node为根节点的树的最小节点
   * @param {Node} node 
   * @return {Node} 删除最小节点后树的根节点
   */
  _delMin(node) {
    if (node === null) return null

    if (node.left === null) {
      const _r = node.right
      node = null
      return _r
    } else {
      node.left = this._delMin(node.left)
      node.N = node.N - 1
      return node
    }
  }

  /**
   * 删除指定的key
   * @param {Number} key 
   */
  del(key) {
    this.root = this._del(this.root, key)
  }

  /**
   * 
   * @param {Node} node 
   * @param {Number} key 
   * @return {Node} 删除key后的树的根节点
   */
  _del(node, key) {
    if (node === null) return null

    //整体思路是，删除节点，拿右侧树的最小节点来补
    if (key < node.key) {
      node.left = this._del(node.left, key)
    } else if (key > node.key) {
      node.right = this._del(node.right, key)
      // 相等的情况
    } else {
      if (node.left === null) return node.right
      if (node.right === null) return node.left

      const t = node
      // 右侧最小节点
      const _rightMin = this._min(t.right)
      this._delMin(t.right)

      _rightMin.left = t.left
      _rightMin.right = t.right
      node = _rightMin

    }

    node.N = node.N - 1

    return node
  }

  /**
   * 范围查找操作
   * @param {Number} start 起始key
   * @param {Number} end  结束key
   * @return {Array} 查找到的Key的结合
   */
  keys(start, end) {
    const queue = []
    this._keys(this.root, queue, start, end)

    return queue
  }

  /**
   * 
   * @param {Number} node 查找的目标节点
   * @param {Array} queue 
   * @param {Number} start 
   * @param {Number} end 
   */
  _keys(node, queue, start, end) {
    if(node === null) return null

    if(node.key > start) {
      this._keys(node.left, queue, start, end)
    }

    // 在范围内
    if(node.key >= start && node.key <= end) {
      queue.push(node.key)
    }

    if(node.key < end) {
      this._keys(node.right, queue, start, end)
    }
  }
}

export default BST