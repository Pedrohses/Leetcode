function isPalindrome(x: number): boolean {
  const y = String(x).split('').reverse().join('');

  if(x == Number(y)) {
    return true
  }

  return false
};

function isPalindromeNoConvertToString(x: number): boolean {
  let numeroInvertido = 0;
  let numeroRestante = Math.abs(x);

  while (numeroRestante > 0) {
    const ultimoDigito = numeroRestante % 10;
    numeroInvertido = (numeroInvertido * 10) + ultimoDigito;
    numeroRestante = Math.floor(numeroRestante / 10);
  }

  if(x == numeroInvertido) {
    return true
  }

  return false
};

isPalindromeNoConvertToString(929)