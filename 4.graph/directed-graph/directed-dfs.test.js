import DiGraph from './di-graph'
import DirectedDFS from './directed-dfs'
import test from 'ava'

test('directed dfs', t => {
  const graph = new DiGraph(3)
  graph.addEdge(0, 1)
  graph.addEdge(0, 2)
  const dfs = new DirectedDFS(graph, [0])
  t.true(dfs.marked(1))
  t.true(dfs.marked(2))
})