/**
 * 关联索引的优先队列单元测试
 */
import test from 'ava'
import IndexMinPQ from './index-min-pq'

test('index min pq', t => {
  const pq = new IndexMinPQ(10)

  pq.insert(5, 10)
  t.is(pq.size(), 1)
  t.false(pq.isEmpty())
  t.is(pq.delMin(), 5)
  t.is(pq.size(), 0)
  t.true(pq.isEmpty())
  
  pq.insert(1, 3)
  pq.insert(2, 1)
  pq.insert(4, 0)
  pq.insert(5, 10)
  t.is(pq.delMin(), 4)
  t.is(pq.size(), 3)
  t.is(pq.minIndex(), 2)

  pq.change(5, -10)
  t.is(pq.minIndex(), 5)
})

test('del min', t => {
  const pq = new IndexMinPQ(10)

  pq.insert(1, 2)
  pq.insert(2, 3)
  pq.insert(3, 4)
  pq.insert(4, 8)
  pq.insert(6, 9)
  t.is(pq.delMin(), 1)
  t.is(pq.delMin(), 2)
  t.is(pq.delMin(), 3)
  t.is(pq.delMin(), 4)
  t.is(pq.delMin(), 6)
  t.is(pq.size(), 0)
  t.true(pq.isEmpty())
  t.is(pq.delMin(), -1)
})

test('change', t => {
  const pq = new IndexMinPQ(10)

  pq.insert(1, 2)
  pq.insert(2, 3)
  pq.insert(3, 4)
  pq.insert(4, 8)
  pq.insert(6, 9)
  t.is(pq.size(), 5)
  t.is(pq.minIndex(), 1)

  pq.change(1,10)
  t.is(pq.size(), 5)
  t.is(pq.minIndex(), 2)
})