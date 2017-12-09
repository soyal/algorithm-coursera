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
  t.is(min.value, 44)
})

test('BST floor', t => {
  const bst = new BST()

  bst.put(2, 22)
  bst.put(1, 11)
  bst.put(3, 33)
  bst.put(0, 44)

  const floor1 = bst.floor(5)
  t.is(floor1.key, 3)
})