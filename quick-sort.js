// Dado um array de inteiros, ordene o array

/**
 * Identifique o elemento pivô em um array. Ele pode ser:
 * - O primeiro elemento.
 * - O último elemento.
 * - Um elemento aleatório.
 * - O elemento central
 *
 * Coloque tudo que é menor que o pivô no array esquerdo e tudo que é maior que o pivô no array direito.
 *
 * Repita o processo para o array esquerdo e direito individuais até que você tenha um array de tamanho 1 que é ordenado por definição.
 *
 * Repetidamente concatene o array esquerdo, o pivô e o array direito até que sobre 1 array ordenado.
 *
 * **`Pior caso - Big-O: O(n²)`**
 *
 * **`Caso médio - Big-θ: O(n log n)`**
 */
function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

const arr = [8, 20, -2, 4, -6];
console.log(quickSort(arr));