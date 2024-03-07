// Problema: dado um numero, encontre o fatorial de n.

/**
 * Na matemática, o fatorial de um número n não negativo, denotado por n!, é o produto de todos os números positivos inteiros menores ou iguais a n. O fatorial de zero é 1.
 * 
 * **`Big-O: O(n)`**
 */
function factorial(n) {
    let result = 1;
    for(let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;

    // let fac = n;

    // if(n === 0) return 1;

    // for(let i = n - 1; i > 0; i--) {
    //     fac *= i;
    // }

    // if(n < 0) return 0;

    // return fac;
}

console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(5));
