import EWGraph from './edge-weighted-graph'
import Edge from './edge'

export const graph = () => {
  const graph = new EWGraph(8)
  graph.addEdge(new Edge(4, 5, 35))
  graph.addEdge(new Edge(4, 7, 37))
  graph.addEdge(new Edge(5, 7, 28))
  graph.addEdge(new Edge(0, 7, 16))
  graph.addEdge(new Edge(1, 5, 32))
  graph.addEdge(new Edge(0, 4, 38))
  graph.addEdge(new Edge(2, 3, 17))
  graph.addEdge(new Edge(1, 7, 19))
  graph.addEdge(new Edge(0, 2, 26))
  graph.addEdge(new Edge(1, 2, 36))
  graph.addEdge(new Edge(1, 3, 29))
  graph.addEdge(new Edge(2, 7, 34))
  graph.addEdge(new Edge(6, 2, 40))
  graph.addEdge(new Edge(3, 6, 52))
  graph.addEdge(new Edge(6, 0, 58))
  graph.addEdge(new Edge(6, 4, 93))

  return graph
}