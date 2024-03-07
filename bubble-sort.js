// Dado um array de inteiros, ordene o array

/**
 * Compara elementos adjacentes e troca as posições se eles não estiverem na ordem correta. Essas instruções são repetidas em cada elemento do array. Uma vez que ele caminhou por todo o array sem fazer trocas, quer dizer que ele está ordenado.
 * 
 * ```
 * 1º loop
 * [-6 20 8 -2 4]
 * [-6 8 20 -2 4]
 * [-6 8 -2 20 4]
 * [-6 8 -2 4 20]
 * Houve troca? Sim, então vamos de novo:
 * 2º loop
 * [-6 8 -2 4 20]
 * [-6 -2 8 4 20]
 * [-6 -2 4 8 20]
 * Houve troca? Sim, então vamos de novo:
 * 3º loop
 * [-6 -2 4 8 20]
 * [-6 -2 4 8 20]
 * [-6 -2 4 8 20]
 * [-6 -2 4 8 20]
 * [-6 -2 4 8 20]
 * Houve troca? Não, então acabou.
 * ```
 * 
 * **`Big-O: O(n²)`**
 */
function bubbleSort(arr) {
    let swapped = true;
    do {
        swapped = false;
        for (let i = 0; i < arr.length - 1; i++) {
            let j = i + 1;
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swapped = true;
            }
        }
    } while(swapped)
    return arr;
    // for (let i in arr) {
    //     for (let j in arr) {
    //         if (arr[i] < arr[j]) {
    //             [arr[i], arr[j]] = [arr[j], arr[i]];
    //         }
    //     }
    // }
}

const arr = [8, 20, -2, 4, -6];
bubbleSort(arr);
console.log(arr);