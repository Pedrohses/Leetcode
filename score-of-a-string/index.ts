/**
 * @param {string} s
 * @return {number}
 */
var scoreOfString = function(s: string) {
  let result = 0
  const stringLength = s.length 
  if(stringLength < 2 || stringLength > 100) {
    console.log('Please, enter a string that has between 2 and 100 characters.')
    return
  }

    for (let i = 0; i < stringLength; i++) {
      if(i === 0) {
        continue
      }

      result += Math.abs(s.charCodeAt(i-1) - s.charCodeAt(i))
    }

    return result
};

scoreOfString('hello')