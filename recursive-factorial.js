// Dado um número n inteiro, encontre o fatorial do número

/**
 * Na matemática, o fatorial de um número n não negativo, denotado por n!, é o produto de todos os números positivos inteiros menores ou iguais a n. O fatorial de zero é 1. O fatorial de 0 é 1.
 * 
 * - factorial(4) = 4 * 3 * 2 * 1 = 24
 * - factorial(5) = 5 * 4 * 3 * 2 * 1 = 120
 * 
 * **`Big-O: O(n)`**
 */
function recursiveFactorial(n) {
    if(n === 0) {
        return 1;
    }
    return recursiveFactorial(n) * recursiveFactorial(n - 1);
}

console.log(recursiveFactorial());