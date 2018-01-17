## 1.基础
* quick-union: 查找代价昂贵，当tree过于瘦长，会花大量时间回溯整棵树
* quick-union-improve: 加权，在每次合并时，将高度较低的树并入高度较高的树，同时将树展平

## 2.排序

### 初级排序
* select sort: 选择排序
* insert sort: 插入排序
* shell sort: 希尔排序

### 归并排序
* merge sort UB: 自顶向下的归并排序
* merge sort BU: 自底向上的归并排序

### 快速排序
* quick sort base: 基础的快速排序

### 堆
> 最大（最小）堆是一棵每一个节点的键值都不小于（大于）其孩子（如果存在）的键值的树

* heap priority queue: 基于堆的优先队列实现
* heap sort: 堆排序

## 3.search 查找

### 符号表
* sequence search: 线性查找(略)
* binary search: 二分查找

### BST(二叉查找树)
> 二叉查找树：对于每个节点，左侧节点总比其小，右侧节点总比其大，既具备链表的插入效率，也具有数组的查找效率
> 缺点：比如一直往左侧插入节点，就会出现左侧高度一直增加，右侧高度一直为1，这是不平衡的，出现这种情况，查找和插入效率都会很差

结合了链表的快速插入优势与数组的快速查询优势

### RedBlackBST(红黑二叉查找树，平衡二叉树的实现)
> 二叉查找树改进版，提升其在最差情况下的性能，其原理是在每次插入时保证了二叉查找树的平衡性，所有空节点到根节点的高度是一样的

## 4.图(Graph)

### Graph 无向图
* Graph 无向图类
* DepthFirstSearch 深度优先连通性搜索
* DepthFirstPaths 深度优先路径搜索，搜索出来的路径为最短路径
* CC 使用深度优先搜索查询连通分量(v与w是否连通)
* Cycle 检测图是否含有环
* TwoColor 双色问题，能否用两种颜色将一幅图的所有顶点着色(检测二分图)
* SymbolGraph 无向图的符号图

### Digraph 有向图
* Digraph 有向图类
* DirectedCycle 检测有向图是否含环
* DirectedDFS 有向图深度优先搜索
* DepthFirstOrder 基于深度优先搜索的顶点排序
* KosarajuSCC 使用kosaraju算法，计算有向图的强连通分量

### UWGraph 加权无向图

* EWGraph 加权无向图类
* Edge 加权边类
* LazyPrimMST 延时Prim算法实现
* PrimMST 即时Prim算法
* Kruskal 算法(略) 原理是从最小权重的边开始遍历，在不构成环的前提下生成最小生成树

### DWGraph 加权有向图(解决最短路径问题)
* DWGraph 加权有向图类