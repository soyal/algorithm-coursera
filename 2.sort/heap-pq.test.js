/**
 * 基于堆的优先队列测试
 */
import test from 'ava'
import HeapPQ from './heap-pq'

test('insert normal', t => {
  const hpq = new HeapPQ(1)
  hpq.insert(1)
  const expect1 = [1]
  t.true(hpq.equal(expect1))

  const hpq2 = new HeapPQ(3)
  hpq2.insert(1)
  hpq2.insert(2)
  hpq2.insert(3)
  const expect2 = [3, 1, 2]
  t.true(hpq2.equal(expect2))

  const hpq3 = new HeapPQ(5)
  hpq3.insert(5)
  hpq3.insert(4)
  hpq3.insert(2)
  hpq3.insert(1)
  hpq3.insert(3)
  const expect3 = [5, 4, 2, 1, 3]
  t.true(hpq3.equal(expect3))
})

test('delMax', t => {
  const hpq = new HeapPQ(5)
  hpq.insert(5)
  hpq.insert(4)
  hpq.insert(2)
  hpq.insert(1)
  hpq.insert(3)

  hpq.delMax()

  const expect = [4, 3, 2, 1]
  t.true(hpq.equal(expect))
})