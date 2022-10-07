module.exports = function check(str, bracketsConfig) {
  let openBrackets = []
  let closeBrackets = []
  let stackArr = []
  bracketsConfig.forEach((arr) => {
    openBrackets.push(arr[0]);
    closeBrackets.push(arr[1])
  })
  for (let el of str) {
    if (openBrackets.includes(el) && closeBrackets.includes(el)) {
      const test3 = stackArr[stackArr.length - 1]
      if (stackArr[stackArr.length - 1] === el) {
        stackArr.pop()
      } else {
        stackArr.push(el)
      }
    }
    else if (openBrackets.includes(el)) {
      stackArr.push(el)
    } else if (closeBrackets.includes(el)) {
      if (stackArr.length === 0) {
        return false
      }
      if (openBrackets.indexOf(stackArr[stackArr.length - 1]) === closeBrackets.indexOf(el)) {
        stackArr.pop()
      }
    }
  }
  if (stackArr.length === 0) {
    return true
  }
  return false
}
