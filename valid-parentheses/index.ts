function isValid(s: string): boolean {

  const pairs: { [key: string]: string } = {
    "(": ")",
    "[": "]",
    "{": "}"
  }
  
  const stack: string[] = []
    
  for (let i = 0; i < s.length; i++) {
    const char = s[i]

    if (pairs[char]) {
      stack.push(char)
      continue
    }

    const stackLength = stack.length
    if (stackLength === 0) {
      return false
    }

    const lastOpen = stack[stackLength - 1]
    if (pairs[lastOpen] === char) {
      stack.pop()
    } else {
      return false
    }
  }

  return stack.length === 0
}


isValid(')(){}')