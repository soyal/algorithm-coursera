import test from 'ava'
import { DepthFirstSearch, Graph } from './graph'

/**
 * 生成一幅无向图
 * p335 4.1.10 
 */
function _geGraph() {
  const graph = new Graph(13)

  graph.addEdge(0, 1)
  graph.addEdge(0, 2)
  graph.addEdge(0, 5)
  graph.addEdge(0, 6)
  graph.addEdge(5, 3)
  graph.addEdge(5, 4)
  graph.addEdge(3, 4)
  graph.addEdge(4, 6)

  graph.addEdge(7,8)

  graph.addEdge(9, 10)
  graph.addEdge(9, 11)
  graph.addEdge(9, 12)
  graph.addEdge(11, 12)

  return graph
}

test('DeepFirstSearch', t => {
  const graph = _geGraph()
  const dst = new DepthFirstSearch(graph, 0)

  // marked方法测试
  t.true(dst.marked(1))
  t.true(dst.marked(2))
  t.false(dst.marked(7))
  t.false(dst.marked(9))

  // count 测试
  t.is(dst.count(), 7)
})