/**
 * 交换数组中两个元素的位置
 * @param {*} arr 
 * @param {*} index1 
 * @param {*} index2 
 */
export const exchange = (arr, index1, index2) => {
  const temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

/**
 * 判断两个数组是否相等，只能比较元素是数值类型的数组
 * @param {Array} arr1 
 * @param {Array} arr2 
 */
export const equalArray = (arr1, arr2) => {
  return arr1.join('-') === arr2.join('-')
}