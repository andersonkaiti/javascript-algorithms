// Dado um array de inteiros, ordene o array

/**
 * Divida o array em subarrays, cada um contendo apenas um elemento (um array contendo um elemento é considerado ordenado).
 *
 * Repetidamente mescle os subarrays para produzir novos subarrays ordenados até que exista apenas um subarray restante. Este será o array ordenado.
 *
 * ```
 *   [-6, 20, 8, -2, 4]  |
 *  [-6, 20] [8, -2, 4]  |
 * [-6] [20] [8] [-2, 4] |
 * [-6] [20] [8] [-2] [4]|
 *                       |
 *  [-6] [20]            | [-6] [20] => []. Esquerdo e direito não estão vazios. -6 < 20.
 *                       | [] [20] => [-6]. Esquerdo está vazio. Mova o array direito.
 *  [-6, 20]             | [] [] => [-6, 20]
 *                       |
 *          [8] [-2] [4] | [8] [-2, 4] => []. Esquerdo e direito não estão vazios. -2 < 8.
 *                       | [8] [4] => [-2]. Esquerdo e direito não estão vazios. 4 < 8.
 *                       | [8] [] => [-2, 4]. Direito não está vazio. Mova o array esquerdo.
 *            [-2, 4, 8] | [] [] => [-2, 4, 8]
 *                       |
 *   [-6, 20] [-2, 4, 8] | [-6, 20] [-2, 4, 8] => []. Esquerdo e direito não estão vazios. -6 < -2.
 *                       | [20] [-2, 4, 8] => [-6]. Esquerdo e direito não estão vazios. -2 < 20.
 *                       | [20] [4, 8] => [-6, -2]. Esquerdo e direito não estão vazios. 4 < 20.
 *                       | [20] [8] => [-6, -2, 4]. Esquerdo e direito não estão vazios. 8 < 20.
 *                       | [20] [] => [-6, -2, 4, 8]. Direito está vazio. Mova o array esquerdo.
 *   [-6, -2, 4, 8, 20]  | [] [] => [-6, -2, 4, 8, 20]
 * ```
 *
 * **`Big-O: O(n log n)`**
 */
function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let middle = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, middle);
  let rightArr = arr.slice(middle);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

function merge(leftArr, rightArr) {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    printStep(sortedArr, leftArr, rightArr);
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
      console.log(leftArr, rightArr, sortedArr);
    } else {
      sortedArr.push(rightArr.shift());
      console.log(leftArr, rightArr, sortedArr);
    }
  }
  console.log("Final", sortedArr, leftArr, rightArr);
  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, 4, -6];
console.log(mergeSort(arr));

function printStep(sortedArr, leftArr, rightArr) {
  console.log(
    leftArr,
    rightArr,
    "   =>  ",
    sortedArr,
    leftArr[0],
    "<",
    rightArr[0],
    leftArr[0] <= rightArr[0]
  );
}