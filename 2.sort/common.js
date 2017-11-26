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

/**
 * 将数组中某位置的元素插入到目标元素的前面
 * @param {Array} arr 
 * @param {Number} originIndex 要插入的元素所在的位置
 * @param {Number} targetIndex 要插入的位置
 */
export const insert = (arr, originIndex, targetIndex) => {
  const nArr = arr
  const tempValue = arr[originIndex]

  // 将前面的元素插入到后面元素的位置
  if (originIndex < targetIndex) {
    for (let i = originIndex + 1; i <= targetIndex; i++) {
      nArr[i - 1] = nArr[i]
    }

    nArr[targetIndex] = tempValue
    // 将后面的元素插入到前面元素的位置
  } else if (originIndex > targetIndex) {
    for (let i = originIndex - 1; i >= targetIndex; i--) {
      nArr[i + 1] = nArr[i]
    }

    nArr[targetIndex] = tempValue
  }

  return nArr
}