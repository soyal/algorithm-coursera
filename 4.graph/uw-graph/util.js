import EWGraph from './edge-weighted-graph'
import Edge from './edge'

export const graph = () => {
  const graph = new EWGraph(8)
  graph.addEdge(new Edge(0, 7, 16))
  graph.addEdge(new Edge(1, 7, 19))
  graph.addEdge(new Edge(0, 2, 26))
  graph.addEdge(new Edge(2, 3, 17))
  graph.addEdge(new Edge(5, 7, 28))
  graph.addEdge(new Edge(4, 5, 35))
  graph.addEdge(new Edge(6, 2, 40))

  return graph
}