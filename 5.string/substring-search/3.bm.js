/**
 * boyer-moore算法，查找子字符串，效率优于kmp
 * 关于解释可以看看这篇文章:http://www.cnblogs.com/lanxuezaipiao/p/3452579.html
 */
const MAX_SIZE = 256
/**
 * 获取坏字符表
 * @return {Array} bc
 * bc记录的是256个字符在pat中最后出现的位置(倒着数的)
 * 比如bc['a']=1表示a最后出现在倒数第二位，如果该字符不存在pat中，则记为pat.length
 */
function getBc(pat) {
  const len = pat.length
  const bc = new Array(MAX_SIZE).fill(len)

  for (let i = 0; i < len; i++) {
    // i + 倒数的位数 = len - 1
    bc[pat.charCodeAt(i)] = len - 1 - i
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
function suffixes(pat) {
  const suff = new Array.fill(0)
  const len = pat.length

  for (let i = len - 1; i >= 0; i++) {
    let j = i

    // 要对比的两位的差是m-1-i
    while (j >= 0 && pat.chatAt(j) === pat.charAt(j + len - 1 - i)) {
      j--
    }

    suff[i] = i - j
  }
}

/**
 * 获取好后缀表
 * @param {String} pat 
 */
function getGs(pat) {
  // const 
}
