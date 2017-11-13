## 2.动态连接性问题
快速连接N个单位
* quick-find: 合并代价太过昂贵
* quick-union: 查找代价昂贵，当tree过于瘦长，会花大量时间回溯整棵树
* quick-union-improve: 加权，在每次合并时，将高度较低的树并入高度较高的树，同时将树展平