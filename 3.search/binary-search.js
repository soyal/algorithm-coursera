
/**
 * @param {Array} arr 有序(升序)数组
 * @param {Number} value 查找的值
 * @return {Number} index 返回对应的数组索引
 */
export const binarySearch = (arr, value, start, end) => {
  if (end < start) return -1

  let mid = parseInt((start + end) / 2)

  if (arr[mid] > value) {
    return binarySearch(arr, value, start, mid - 1)
  } else if (arr[mid] < value) {
    return binarySearch(arr, value, mid + 1, end)
  } else if (arr[mid] === value) {
    return mid
  } else {
    return -1
  }
}