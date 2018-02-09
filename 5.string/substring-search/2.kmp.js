/**
 * kmp算法
 */

/**
 * @param {String} txt 目标文本
 * @param {String} pat 要匹配的模式
 */
export default function kmp(txt, pat) {
  const N = txt.length,
    M = pat.length

  const next = getNext(pat, new Array(M))
  let i = 0,
    j = 0

  while (i < N && j < M) {
    if (j === -1 || txt.charAt(i) === pat.charAt(j)) {
      i++
      j++
    } else {
      j = next[j]
    }
  }

  // 匹配成功
  if (j === M) {
    return i - j
  }

  // 匹配失败
  return -1
}

/**
 * 生成部分匹配表
 * next 表示 pmt表往右移动一位，0位填充-1构成的
 * pmt表的意义: pmt[j]表示在字符串[0, j]这个区间，前缀字符串和后缀字符串最长交集的长度
 * 前缀字符串: abab, {'a', 'ab', 'aba'}
 * 后缀字符串: abab, {'b', 'ab', 'bab'}
 * 上例的pmt表为: [0, 0, 1, 2]
 * next为: [-1, 0, 0, 1]，next[j]可以理解为在j位匹配失败，j应该回退到的索引值
 */
function getNext(pat, next) {
  let i = 0,
    j = -1
  next[0] = -1

  const len = pat.length
  while (i < len) {
    if (j === -1 || pat.charAt(i) === pat.charAt(j)) {
      i++
      j++
      next[i] = j
    } else {
      j = next[j]
    }
  }

  return next
}
