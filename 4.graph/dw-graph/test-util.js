import EWGraph from './edge-weighted-digraph'
import DirectedEdge from './directed-edge'

// p416 测试用例
export  function _graph() {
  const graph = new EWGraph(8)
  graph.addEdge(new DirectedEdge(4, 5, 35))
  graph.addEdge(new DirectedEdge(5, 4, 35))
  graph.addEdge(new DirectedEdge(4, 7, 37))
  graph.addEdge(new DirectedEdge(5, 7, 28))
  graph.addEdge(new DirectedEdge(7, 5, 28))
  graph.addEdge(new DirectedEdge(5, 1, 32))
  graph.addEdge(new DirectedEdge(0, 4, 38))
  graph.addEdge(new DirectedEdge(0, 2, 26))
  graph.addEdge(new DirectedEdge(7, 3, 39))
  graph.addEdge(new DirectedEdge(1, 3, 29))
  graph.addEdge(new DirectedEdge(2, 7, 34))
  graph.addEdge(new DirectedEdge(6, 2, 40))
  graph.addEdge(new DirectedEdge(3, 6, 52))
  graph.addEdge(new DirectedEdge(6, 0, 58))
  graph.addEdge(new DirectedEdge(6, 4, 93))

  return graph
}
