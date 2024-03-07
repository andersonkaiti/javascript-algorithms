// Dado uma escada de n passos, conte as distintas formas de escalar ao topo. Você pode subir 1 degrau ou 2 de cada vez.

/**
 * n = 1, climbingStaircase(1) = 1  | (1)
 * n = 2, climbingStaircase(2) = 2  | (1, 1) e (2)
 * n = 3, climbingStaircase(3) = 3  | (1, 1, 1), (1, 2) e (2, 1)
 * n = 4, climbingStaircase(4) = 5  | (1, 1, 1, 1), (1, 1, 2), (2, 1, 1) e (2, 2)
 * 
 * **`Big-O: O(n)`**
 */
function climbingStaircase(n) {
  const noOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }

  return noOfWays[n - 1];
  // if (n < 2) {
  //     return 1;
  // }
  // return climbingStaircase(n - 1) + climbingStaircase(n - 2);
}

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
console.log(climbingStaircase(5));
