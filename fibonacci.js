// Problema: dado um número n, encontre os primeiros n elementos de uma sequência da Fibonacci.

/**
 * Na matemática, a sequência de Fibonacci é uma sequência em que cada número é a soma dos dois números anteriores. Os primeiros números da sequência são 0 e 1.
 * 
 * **`Big-O: O(n)`**, pois temos uma declaração dentro de um for loop, que será o n, junto com mais 2 declarações insignificantes.
 */

function fibonacci(n) {
    const fib = [0, 1];
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));