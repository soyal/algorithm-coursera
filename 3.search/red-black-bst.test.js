/**
 * 红黑树测试用例
 */
import test from 'ava'
import { Node, RedBlackBST, RED, BLACK } from './red-black-bst'

test('_rotateLeft', t => {
  const node1 = new Node(1, 11, BLACK, 2)
  const node2 = new Node(2, 22, RED, 1)

  const bst = new RedBlackBST()

  node1.right = node2
  const result = bst._rotateLeft(node1)

  t.is(result.key, 2)
  t.is(result.color, BLACK)
  t.is(result.left.key, 1)
  t.is(result.left.color, RED)
})

test('_rotateRight', t => {
  const node1 = new Node(2, 22, BLACK, 2)
  const node2 = new Node(1, 11, RED, 1)

  const bst = new RedBlackBST()

  node1.left = node2
  const result = bst._rotateRight(node1)

  t.is(result.key, 1)
  t.is(result.color, BLACK)
  t.is(result.right.key, 2)
  t.is(result.right.color, RED)
})

test('put', t => {
  // 连续右侧插入
  const bst = new RedBlackBST()

  bst.put(1, 11)
  bst.put(2, 22)
  bst.put(3, 33)

  t.is(bst.root.key, 2)
  t.is(bst.root.color, BLACK)
  t.is(bst.root.left.key, 1)
  t.is(bst.root.left.color, BLACK)
  t.is(bst.root.right.key, 3)
  t.is(bst.root.right.color, BLACK)


  // 连续左侧插入
  const bst2 = new RedBlackBST()

  bst2.put(3, 33)
  bst2.put(2, 22)
  bst2.put(1, 11)

  t.is(bst2.root.key, 2)
  t.is(bst2.root.color, BLACK)
  t.is(bst2.root.left.key, 1)
  t.is(bst2.root.left.color, BLACK)
  t.is(bst2.root.right.key, 3)
  t.is(bst2.root.right.color, BLACK)


  // 先左后右
  const bst3 = new RedBlackBST()

  bst3.put(2,22)
  bst3.put(1,11)
  bst3.put(3,33)

  t.is(bst3.root.key, 2)
  t.is(bst3.root.color, BLACK)
  t.is(bst3.root.left.key, 1)
  t.is(bst3.root.left.color, BLACK)
  t.is(bst3.root.right.key, 3)
  t.is(bst3.root.right.color, BLACK)


  // 先右后左
  const bst4 = new RedBlackBST()

  bst4.put(2,22)
  bst4.put(3,33)
  bst4.put(1,11)

  t.is(bst4.root.key, 2)
  t.is(bst4.root.color, BLACK)
  t.is(bst4.root.left.key, 1)
  t.is(bst4.root.left.color, BLACK)
  t.is(bst4.root.right.key, 3)
  t.is(bst4.root.right.color, BLACK)
})