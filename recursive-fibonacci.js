// Dado um número n, encontre o n-ésimo elemento da sequência de Fibonacci

/**
 * Na matemática, a sequência de Fibonacci é uma sequência em que cada número é a soma dos dois números anteriores. Os primeiros números da sequência são 0 e 1. (0, 1, 1, 2, 3, 5, 8...)
 *
 * recursiveFibonacci(0) = 0
 * recursiveFibonacci(1) = 1
 * recursiveFibonacci(6) = 8
 *
 * Time complexity:
 * - Big-O: O(n) - iterative
 * - Big-O: O(2ⁿ) - recursive
 */
function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0));
console.log(recursiveFibonacci(1));
console.log(recursiveFibonacci(6));
