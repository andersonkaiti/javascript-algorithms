// Dado um array ordenado com n elementos e um elemento alvo t, encontre o index de t no array. Retorne -1 se o elemento alvo não for encontrado.

/**
 * - Se o array está vazio, retorna -1, já que o elemento não pode ser encontrado.
 * - Se o array tem elementos, encontre o elemento central no array (se houver dois, o central será o primeiro, então no seguinte array: [1, 2, 3, 4], o elemento central será o 2).
 * - Se o alvo é igual ao elemento central, retorne o elemento central.
 * - Se o alvo for menor que o elemento central, a busca binária será para a primeira metade do array.
 * - Se o alvo for maior que o elemento central, a busca binária será para a segunda metade do array.
 * 
 * **`Big-O: O(log n)`**
 */
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if(target === arr[middleIndex]) {
            return middleIndex;
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
    
//   let start = 0;
//   let end = arr.length - 1;
//   while (start <= end) {
//     let current = Math.floor((start + end) / 2);
//     if (arr[current] === target) return current;

//     if (arr[current] < target) {
//       start = current + 1;
//     } else {
//       end = current - 1;
//     }
//   }
//   return -1;
}

let arr = [-5, 2, 4, 6, 10];

console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 20));