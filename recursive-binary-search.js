// Dado um array ordenado com n elementos e um elemento alvo t, encontre o index de t no array. Retorne -1 se o elemento alvo não for encontrado.

/**
 * **`Big-O: O(log n)`**
 */
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (target < arr[middleIndex]) {
    return search(arr, target, leftIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, rightIndex);
  }
}

let arr = [-5, 2, 4, 6, 10];

console.log(recursiveBinarySearch(arr, 10));
console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 20));