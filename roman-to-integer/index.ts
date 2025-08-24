function romanToInt(s: string): number {
  let result = 0
  const romanNumber: { [key: string]: number } = {
    'I': 1,
    'IV': 4,
    'V': 5,
    'IX': 9,
    'X': 10,
    'XL': 40,
    'L': 50,
    'XC': 90,
    'C': 100,
    'CD': 400,
    'D': 500,
    'CM': 900,
    'M': 1000
  }

  for (let i = 0; i < s.length; i++) {
    let actualNumber = romanNumber[s[i]]
    const postNumber = romanNumber[s[i+1]]
    const twoChars = s[i] + s[i+1];
    if(romanNumber[twoChars]) {
      result += postNumber - actualNumber
      i++
      continue
    }

    if(actualNumber < postNumber) {
      console.log('Invalid Roman Number')
      return 0
    }

    result += actualNumber
  }

  return result
};