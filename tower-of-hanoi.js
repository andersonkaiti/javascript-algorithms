/**
 * **`Big-O: O(2ⁿ)`**
 */
function towerOfHanoi(n, origin, auxiliar, destiny) {
  if (n === 1) {
    console.log(`Move disk 1 from ${origin} to ${destiny}`);
    return;
  }
  towerOfHanoi(n - 1, origin, destiny, auxiliar);
  console.log(`Move disk ${n} from ${origin} to ${destiny}`);
  towerOfHanoi(n - 1, auxiliar, origin, destiny);
}

towerOfHanoi(3, "A", "B", "C");