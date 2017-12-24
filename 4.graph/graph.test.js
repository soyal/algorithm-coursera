import test from 'ava'
import { 
  DepthFirstSearch, 
  DepthFirstPaths,
  BreadthFirstPaths,
  Graph
} from './graph'

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

test('DepthFirstSearch', t => {
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

test('DepthFirstPaths', t => {
  const graph = _geGraph()
  const dfps = new DepthFirstPaths(graph, 0)

  // hasPathTo
  t.true(dfps.hasPathTo(1))
  // pathTo
  t.is(dfps.pathTo(1).join('-'), '1-0')
  t.is(dfps.pathTo(3).join('-'), '3-5-0')
  t.is(dfps.pathTo(4).join('-'), '4-3-5-0')
})

test('BreadthFirstPaths', t => {
  const graph = _geGraph()
  const bfsp = new BreadthFirstPaths(graph, 0)

  // hasPathTo
  t.true(bfsp.hasPathTo(1))
  // pathTo
  t.is(bfsp.pathTo(1).join('-'), '1-0')
  t.is(bfsp.pathTo(3).join('-'), '3-5-0')
  t.is(bfsp.pathTo(4).join('-'), '4-5-0')
})