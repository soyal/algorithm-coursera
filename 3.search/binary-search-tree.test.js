import test from 'ava'
import BST from './binary-search-tree'

test('BST size', t => {
  const bst = new BST()

  t.is(bst.size(), 0)

  bst.put(1, 11)

  t.is(bst.size(), 1)
})

test('BST get', t => {
  const bst = new BST()

  bst.put(1, 11)
  bst.put(2, 22)
  bst.put(3, 33)

  t.is(bst.get(1), 11)
  t.is(bst.get(2), 22)
  t.is(bst.get(4), null)
})

test('BST min', t => {
  const bst = new BST()

  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(0, 44)

  const min = bst.min()
  t.is(min, 0)
})

test('BST floor', t => {
  const bst = new BST()

  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(0, 44)

  const floor1 = bst.floor(5)
  t.is(floor1, 3)
})

test('BST ceil', t => {
  const bst = new BST()

  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(6, 66)

  const _c1 = bst.ceil(5)
  t.is(_c1, 6)

  const _c2 = bst.ceil(3)
  t.is(_c2, 3)
})

test('BST select', t => {
  const bst = new BST()

  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(6, 66)

  t.is(bst.select(2), 3)
  t.is(bst.select(3), 6)
  t.is(bst.select(4), null)
})

test('BST rank', t => {
  const bst = new BST()

  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(6, 66)

  t.is(bst.rank(1), 0)
  t.is(bst.rank(3), 2)
  t.is(bst.rank(5), 3)
  t.is(bst.rank(99), 4)
})

test('BST delMin', t => {
  const bst = new BST()
  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(6, 66)

  t.is(bst.min(), 1)

  bst.delMin()
  t.is(bst.min(), 2)
  t.is(bst.size(), 3)

  bst.delMin()
  t.is(bst.min(), 3)
  t.is(bst.size(), 2)
})

test('BST del', t => {
  const bst = new BST()

  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(6, 66)

  t.is(bst.get(1), 11)
  t.is(bst.size(), 4)
  
  bst.del(1)

  t.is(bst.get(1), null)
  t.is(bst.size(), 3)
})