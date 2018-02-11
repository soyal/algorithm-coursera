/**
 * boyer-moore算法，查找子字符串，效率优于kmp
 * 关于解释可以看看这篇文章:http://www.cnblogs.com/lanxuezaipiao/p/3452579.html
 */
const MAX_SIZE = 256
/**
 * 获取坏字符表
 * @return {Array} bc
 * bc记录的是256个字符在pat中最后出现的位置(倒着数的)，如果存在重复，则以最右侧为准
 * 比如bc['a']=1表示a最后出现在倒数第二位，如果该字符不存在pat中，则记为pat.length
 */
export function getBc(pat) {
  const len = pat.length
  const bc = new Array(MAX_SIZE).fill(-1)

  for (let i = 0; i < len; i++) {
    // i + 倒数的位数 = len - 1
    bc[pat.charCodeAt(i)] = i
  }
  return bc
}

/**
 * 计算模式的后缀数组
 * @return {Array} suff
 * 所谓的后缀数组，记录的是以j为结尾的子字符串与pat的后缀交集的长度
 * 如suff[j]表示[0, j]这个区间的字符串和[0, len-1]这个区间字符串后缀交集的长度
 * 假设有字符串ACABAB
 * 则其suff为 [0, 0, 0, 2, 0, 6]
 */
export function suffixes(pat) {
  const len = pat.length
  const suff = new Array(len).fill(0)

  for (let i = len - 1; i >= 0; i--) {
    let j = i

    // 要对比的两位的差是m-1-i
    while (j >= 0 && pat.charAt(j) === pat.charAt(j + len - 1 - i)) {
      j--
    }

    suff[i] = i - j
  }

  return suff
}

/**
 * 获取好后缀表
 * @param {String} pat
 * @return {Array} gs 好后缀表
 * gs 将记录pat各个位置的元素匹配失败后,将向右移动的距离
 * e.g: gs[3] = 5，表示第3位匹配失败,pat将向前移动5位
 */
export function getGs(pat) {
  const len = pat.length
  const suff = suffixes(pat)
  const gs = new Array(len).fill(len)
  gs[len - 1] = len

  // k为错误匹配位置,[k + 1, len - 1]则为要查找的后缀
  // 这段距离为 len - 1 - k - 1 + 1 = len - 1 - k
  for (let k = 0; k < len - 1; k++) {
    for (let i = len - 2; i >= 0; i--) {
      // 完全匹配 || 部分匹配
      if (
        suff[i] === len - 1 - k ||
        (suff[i] === i + 1 && i + 1 <= len - 1 - k)
      ) {
        gs[k] = len - 1 - i
        continue
      }
    }
  }

  return gs
}

/**
 * bm匹配子字符串算法
 * @param {*} txt
 * @param {*} pat
 */
export default function bm(txt, pat) {
  const bc = getBc(pat)
  const gs = getGs(pat)
  const txtLen = txt.length
  const patLen = pat.length

  // i 指向txt, j指向pat
  let i = 0,
    j = patLen - 1

  while (i + j < txtLen) {
    const targetChar = txt.charAt(i + j)
    const patChar = pat.charAt(j)

    // 匹配到
    if (targetChar === patChar) {
      j--
      if(j === -1) break
      // 未匹配到
    } else {
      const bcNth = bc[targetChar.charCodeAt(0)] 
      const bcShift = bcNth === -1 ? patLen: j - bcNth
      const gsShift = gs[j]

      let shift 
      if(gsShift === patLen) {
        shift = bcShift
      } else {
        shift = Math.max(gsShift, bcShift)
      }
      
      i += shift
      j = patLen - 1
    }
  }

  if (j === -1) return i

  return -1
}
