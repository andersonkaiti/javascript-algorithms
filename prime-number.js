// Dados um número natural n, determinar se o número é primo ou não.

/**
 * Um número primo é um número natural maior que 1 e que não é que produto de dois números naturais menores.
 *
 * `Forma otimizada`: inteiros maiores que a raiz quadrada do número não precisam ser checados, porque sempre que n = a * b, um dos dois fatores a e b são menores ou iguais à raiz quadrada de n.
 *
 * - n = 24, a = 4, b = 6
 * - A raiz quadrada de 24 é 4.89
 * - 4 é menor que 4.89
 * - a é menor que a raiz quadrada de n
 *
 * **`Big-O: O(n)`**
 *
 * `Time complexity: O(sqrt(n))`, pois à medida que n aumenta, o tempo de vezes que o for loop itera também aumenta, mas não na mesma proporção.
 */
function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
  // let count = 0;
  // for(let i = 1; i <= n; i++) {
  //     for(let j = 1; j <= n; j++) {
  //         if(i * j === n) {
  //             count++;
  //         }
  //     }
  // }

  // if(count > 2 || count < 2) {
  //     return false;
  // } else if (count == 2) {
  //     return true;
  // }
}

console.log(isPrime(1));
console.log(isPrime(5));
console.log(isPrime(4));
