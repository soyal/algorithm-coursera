import { insert } from './common'

/**
 * 插入排序
 * @param {Array} arr
 */
export default (arr) => {
  const nArr = arr.slice()
  for (let i = 1, len = nArr.length; i < len; i++) {
    
    let target
    for(let j = i - 1; j >= 0 && nArr[j] > nArr[i]; j--) {
      target = j
    }
    
    // console.log('target...........................', target)
    if(target !== undefined) {
      insert(nArr, i, target)
    }
  }

  return nArr
}