/* Dado um número n positivo inteiro, determine se o número é um "is power of 2" ou não.


Exemplos:
- isPowerOfTwo(1) = true (2⁰)
- isPowerOfTwo(2) = true (2¹)
- isPowerOfTwo(5) = false
*/

/**
 * Um inteiro é um "power of two" se existe um número inteiro x, de tal forma que n === 2ˣ
 * 
 * `Primeira solução:`
 * - Big-O: O(log n)
 * 
 * `Segunda solução:`
 * - Big-O: O(1)
 * 
 * `Terceira solução:`
 * - Big-O: O(1)
 */
function isPowerOfTwo(n) {
    // if(n < 1) {
    //     return false;
    // }
    // while(n > 1) {
    //     if(n % 2 !== 0) {
    //         return false;
    //     }
    //     n /= 2;
    // }
    // return true;
    
    if(n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0;

    // return Number.isInteger(Math.log2(n));
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));