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