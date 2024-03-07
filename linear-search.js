// Dado um array com n elementos e um elemento alvo t, encontre o index de t no array. Retorne -1 se o elemento alvo não for encontrado.

/**
 * Começa pelo primeiro elemento do array e move até o final. Em cada elemento, checa-se se o elemento do array é igual ao elemento alvo. Se o elemento for encontrado, a função retorna o index do elemento, senão, retorna -1.
 * 
 * arr = [-5, 2, 10, 4, 6], t = 10: isso deveria retornar 2
 * arr = [-5, 2, 10, 4, 6], t = 6: isso deveria retornar 4
 * arr = [-5, 2, 10, 4, 6], t = 20: isso deveria retornar -1
 * 
 * **`Big-O: O(n)`**
 */
function linearSearch(arr, target) {
  for (let key in arr) {
    if (arr[key] === target) {
      return key;
    }
  }
  return -1;
}

let arr = [-5, 2, 10, 4, 6];

console.log(linearSearch(arr, 10));
console.log(linearSearch(arr, 6));
console.log(linearSearch(arr, 20));