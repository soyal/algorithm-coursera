import test from 'ava'
import MinPQ from './min-queue'
import Edge from './edge'

test('min queue', t => {
  const pq = new MinPQ()

  pq.insert(new Edge(0, 1, 1))
  pq.insert(new Edge(0, 1, 5))
  pq.insert(new Edge(0, 1, 3))
  pq.insert(new Edge(0, 1, 2))
  pq.insert(new Edge(0, 1, 9))

  t.is(pq.delMin().weight(), 1)
  t.is(pq.delMin().weight(), 2)
  t.is(pq.delMin().weight(), 3)
  t.is(pq.delMin().weight(), 5)
  t.is(pq.delMin().weight(), 9)

  t.true(pq.isEmpty())
})
