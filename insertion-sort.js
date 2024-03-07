// Dado um array de inteiros, ordene o array

/**
 * - Divida virtualmente o array em uma parte ordenada e uma não ordenada.
 * - Assuma que o primeiro elemento está ordenado e o restante está desordenado.
 * - Selecione todos os elementos desordenados e compare com todos os elementos da parte ordenada.
 * - Se o elemento na parte ordenada é menor que o do elemento selecionado, prossiga para o próximo elemento da parte desordenada. Senão, mude os maiores maiores elementos da parte ordenada em direção à direita.
 * - Insira o elemento selecionado no índice correto.
 * - Repita até que todos os elementos não classificados sejam colocados na ordem correta.
 * 
 * ```
 * [-6 20 8 -2 4]  | NTI = 20 | SE = -6 | -6 > 20? Não. Coloque o 20 à direita do -6.
 * [-6 20 8 -2 4]  | NTI = 8  | SE = 20 | 20 >  8? Sim. Mova 20 uma posição para a direita.
 * [-6 20 20 -2 4] | NTI = 8  | SE = -6 | -6 >  8? Não. Coloque o 8 à direita do 6.
 * [-6 8 20 -2 4]  | NTI = -2 | SE = 20 | 20 > -2? Sim. Mova 20 uma posição para a direita.
 * [-6 8 20 20 4]  | NTI = -2 | SE = 8  | 8  > -2? Sim. Mova 8 uma posição para a direita.
 * [-6 8 8 20 4]   | NTI = -2 | SE = -6 | -6 > -2? Não. Mova o -2 à direita do -6.
 * [-6 -2 8 20 4]  | NTI = 4  | SE = 20 | 20 >  4? Sim. Mova 20 uma posição para a direita.
 * [-6 -2 8 20 20] | NTI = 4  | SE = 8  | 8  >  4? Sim. Mova 8 um aposição para a direita.
 * [-6 -2 8 8 20]  | NTI = 4  | SE = -2 | -2 >  4? Não. Coloque o 4 à direita do -2.
 * ```
 * 
 * **`Big-O: O(n²)`**
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    let j = i - 1;
    // console.log(arr, "NTI: " + numberToInsert, "SE: " + arr[j]);
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      // console.log(arr, "NTI: " + numberToInsert, "SE: " + arr[j]);
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}

const arr = [8, 20, -2, 4, -6];
insertionSort(arr);
console.log(arr);