/**
 * 暴力子字符串查找(显式回退)
 * @param {String} pat 匹配模式
 * @param {String} txt 目标文本
 */
export default function search(pat, txt) {
  const M = pat.length,
    N = txt.length
  let i = 0,
    j = 0

  for (; i < N && j < M; i++) {
    // console.log('txt:', txt.charAt(i),'pat:', pat.charAt(j))
    if (txt.charAt(i) === pat.charAt(j)) {
      j++
    } else {
      i -= j
      j = 0
    }
  }

  // 找到
  if(j === M) {
    return i - M
  }

  // 未找到
  return N
}
