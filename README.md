# O que é um algoritmo?

Um algoritmo é `um conjunto de instruções bem definidas para resolver um problema específico`. Ele deve conter inputs e outputs bem definidos, cada passo precisa ser claro e não ambíguo e pode ser implementado em qualquer linguagem.

Um problema pode ser resolvido de diversas maneiras, mas cada técnica tem seu nível de eficiência.

Normalmente, para medir a eficiência de algo, usamos medidas absolutas, como comparar alguém que corre 100 metros em 12 segundos ser mais rápido que alguém que corre a mesma distância em 15 segundos.

Mas não é possível utilizar o tempo absoluto de execução de um algoritmo para calcular a eficiência, já que isso depende de inúmeros fatores como:

- A linguagem de programação.
- O computador que está rodando.
- Outros programas sendo executados ao mesmo tempo.
- Qualidade do sistema operacional.

Nós calculamos a performance do algoritmo em termos do tamanho do input.

# Time Complexity

Quantia de tempo gasto por um algoritmo para ser executado em função do tamanho da entrada.

# Space Complexity

Quantia de memória gasta por um algoritmo ao ser executado em função do tamanho da entrada.

# Como representar a complexidade?

A partir de asymptotic notations, que são ferramentas matemáticas para representar complexidade de tempo e espaço.

1. `Big-O Notation (O-Notation)`: pior caso de complexidade.
2. `Omega Notation (Ω-Notation)`: melhor caso de complexidade.
3. `Theta Notation (θ-Notation)`: complexidade média.

A melhor prática é não se preocupar com a Omega Notation nem com a Theta Notation, pois, ao lidar com problemas, nós `sempre estamos mais preocupados com o pior cenário possível de um algoritmo`.

# Big-O Notation

A notação Big-O descreve a complexidade de um algoritmo utilizando termos algébricos.

Nós não podemos calcular o tempo absoluto de execução de um algoritmo, o que podemos fazer é contar o número de vezes que uma declaração é executada baseado no tamanho do input.

```
function summation(n) { ────────────────► n = 4
  let sum = 0; ─────────────────────────► 1
  for (let i = 1; i <= n; i++) {
    sum += i; ──────────────────────────► 4
  }
  return sum; ──────────────────────────► 1
}


Big-O: n + 2 = n
```

`Dependendo do tamanho do n, o 2 é insignificante, então podemos escreve apenas n em vez de n + 2.`

# Time Complexity

- `O(1) ─► constant`: o cálculo não depende do tamanho do input.

```
function summation(n) {
    return (n * (n + 1)) / 2;
}
```

- `O(n) ─► linear`: ou seja, um loop.

```
for(let i = 1; i <= n; i++) {

}
```

- `O(n²) ─► quadratic`: ou seja, 2 loops aninhados.

```
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {

    }
}
```

- `O(n³) ─► cubic`: ou seja, 3 loops aninhados.

```
for(let i = 1; i <= n; i++) {
    for(let j = 1; j <= i; j++) {
        for(let k = 1; k <= j; k++) {

        }
    }
}
```

- `O(log n) ─► logaritmo`: o tamanho do input reduz a cada iteração.

# Space Complexity

- `O(1) ─► constant`: o algoritmo não precisa de memória extra, ou a quantidade de memória não depende do tamanho do input.

- `O(n) ─► linear`: o espaço extra cresce na mesma proporção que o tamanho do input cresce.

- `O(log n) ─► logaritmo`: o espaço extra cresce, mas não na mesma taxa que o input.

# Objects Big-O

Um objeto é uma coleção de `pares chave-valor`.

```
const person = {
    firstName: "Bruce",
    lastName: "Wayne"
}
```

- Insert - O(1)
- Remove - O(1)
- Access - O(1)
- Search - O(n): caso seja necessário buscar algum valor, pode ser necessário verificar todos os valores presentes no objeto.
- Object.keys() - O(n)
- Object.values() - O(n)
- Object.entries() - O(n)

# Array Big-O

Um array é uma coleção de `valores ordenados`.

```
const odd = [1, 3, 5, 7, 9];
```

- Insert/remove no final - O(1)
- Insert/remove no início - O(n): porque todos os valores à direita serão movidos.
- Access - O(1)
- Search - O(n): porque o elemento pode ser o último do array.
- Push/pop - O(1)
- Shift/unshift/concat/slice/splice - O(n)
- forEach/map/filter/reduce - O(n)

# Sequência de Fibonacci

Na matemática, a sequência de Fibonacci é uma sequência em que `cada número é a soma dos dois números anteriores`. Os primeiros números da sequência são 0 e 1.

`Big-O: O(n)`, pois temos uma declaração dentro de um for loop, que será o n, junto com mais 2 declarações, que são insignificantes.

```
function fibonacci(n) {
    const fib = [0, 1]; ────────────────────▶ 1
    for(let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2]; ──▶ n
    }
    return fib; ────────────────────────────▶ 1
}
```

# Fatorial

Na matemática, o fatorial de um número n não negativo, denotado por n!, é o produto de todos os números positivos inteiros menores ou iguais a n. O fatorial de zero é 1.

`Big-O: O(n)`

```
function factorial(n) {
    let result = 1; ─────────────────────────▶ 1
    for(let i = 2; i <= n; i++) {
        result *= i; ────────────────────────▶ n
    }
    return result; ──────────────────────────▶ 1
}
```

# Número Primo

Um número primo é um número natural maior que 1 e que não é produto de dois números naturais menores.

`Forma otimizada`: inteiros maiores que a raiz quadrada do número não precisam ser checados, porque sempre que n = a \* b, um dos dois fatores a e b são menores ou iguais à raiz quadrada de n.

- n = 24, a = 4, b = 6.
- A raiz quadrada de 24 é 4.89.
- 4 é menor que 4.89.
- a é menor que a raiz quadrada de n.

`Big-O: O(n)`

`Time complexity: O(sqrt(n))`, pois à medida que n aumenta, o tempo de vezes que o for loop itera também aumenta, mas não na mesma proporção.

```
function isPrime(n) {
    if(n < 2) {
        return false; ──────────────────────────▶ 1
    }
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(n % i === 0) {
            return false; ──────────────────────▶ √n
        }
    }
    return true; ───────────────────────────────▶ 1
}
```

# Is Power of Two

Um inteiro é um "power of two" se existe um número inteiro x, de tal forma que `n === 2ˣ`.

`Big-O: O(log n)`

```
function isPowerOfTwo(n) {
    if(n < 1) {
        return false;
    }
    while(n > 1) {
        if(n % 2 !== 0) {
            return false;
        }
        n /= 2; ─────────────────────────▶ log n
    }
    return true;
}
```

Outra solução mais otimizada é utilizando o `operador bitwise`:

```
function isPowerOfTwo(n) {
    if(n < 1) {
        return false;
    }

    return (n & (n - 1)) === 0; ────────▶ 1
}
```

E outra solução mais otimizada ainda é utilizando `log de 2`:

```
function isPowerOfTwo(n) {
    return Number.isInteger(Math.log2(n)); ─▶ 1
}
```

# Recursividade

É uma `técnica de solução de problemas` onde a solução depende da `solução de pequenas partes do mesmo problema`.

Toda solução com recursividade precisa ter um `caso base`, ou seja, uma `condição para terminar a recursividade`.

# Linear Search

Começa pelo primeiro elemento do array e move até o final. Em cada elemento, checa-se se o elemento do array é igual ao elemento alvo. Se o elemento for encontrado, a função retorna o index do elemento, senão, retorna -1.

`Big-O: O(n)`

```
function linearSearch(arr, target) {
  for(let key in arr) {
    if(arr[key] === target) {
      return key; ───────────────────────▶ n
    }
  }
  return -1;
}
```

# Binary Search

- Se o array está vazio, `retorna -1`, já que o elemento não pode ser encontrado.
- Se o array tem elementos, encontra o `elemento central` no array (se houver `dois`, o `central será o primeiro`, então no seguinte array: `[1, 2, 3, 4]`, o elemento central será o `2`).
- Se o alvo é igual ao elemento central, retorna o elemento central.
- Se o alvo for menor que o elemento central, a busca binária será para a primeira metade do array.
- Se o alvo for maior que o elemento central, a busca binária será para a segunda metade do array.

`Big-O: O(log n)`

```
function binarySearch(arr, target) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2); ──────▶ log n
        if(target === arr[middleIndex]) {
            return middleIndex;
        }
        if(target < arr[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }
}
```

# Recursive Binary Search

`Big-O: O(log n)`

```
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
```

# Bubble Sort

Compara `elementos adjacentes` e `troca` as posições se eles `não estiverem na ordem correta`. Essas instruções são repetidas em cada elemento do array. Uma vez que ele caminhou por todo o array sem fazer trocas, quer dizer que ele está ordenado.

`Big-O: O(n²)`

```
function bubbleSort(arr) {
    let swapped = true;
    do {
        swapped = false; ───────────────────▶ n
        for (let i = 0; i < arr.length - 1; i++) {
            let j = i + 1;
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                swapped = true; ────────────▶ n
            }
        }
    } while(swapped)
    return arr;
}
```

```
1º loop
[-6 20 8 -2 4]
[-6 8 20 -2 4]
[-6 8 -2 20 4]
[-6 8 -2 4 20]
Houve troca? Sim, então vamos de novo:
2º loop
[-6 8 -2 4 20]
[-6 -2 8 4 20]
[-6 -2 4 8 20]
Houve troca? Sim, então vamos de novo:
3º loop
[-6 -2 4 8 20]
[-6 -2 4 8 20]
[-6 -2 4 8 20]
[-6 -2 4 8 20]
[-6 -2 4 8 20]
Houve troca? Não, então acabou.
```

# Insertion Sort

- Divida virtualmente o array em uma parte ordenada e uma não ordenada.
- Assuma que o primeiro elemento está ordenado e o restante está desordenado.
- Selecione todos os elementos desordenados e compare com todos os elementos da parte ordenada.
- Se o elemento na parte ordenada é menor que o do elemento selecionado, prossiga para o próximo elemento da parte desordenada. Senão, mude os maiores maiores elementos da parte ordenada em direção à direita.
- Insira o elemento selecionado no índice correto.
- Repita até que todos os elementos não classificados sejam colocados na ordem correta.

`Big-O: O(n²)`

```
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) { ──────────▶ n
    let numberToInsert = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > numberToInsert) { ───▶ n
      arr[j + 1] = arr[j]; 
      j--;
    }
    arr[j + 1] = numberToInsert;
  }
}
```

`NTI: Number to Insert`

`SE: Sorted Element`

`Quando a condição é resultado em "Sim", o valor trocado é armazenado na variável NTI, então não há perda.`

```
[-6 20 8 -2 4]  │ NTI = 20 │ SE = -6 │ -6 > 20? Não. Coloque o 20 à direita do -6.
[-6 20 8 -2 4]  │ NTI = 8  │ SE = 20 │ 20 >  8? Sim. Mova 20 uma posição para a direita.
[-6 20 20 -2 4] │ NTI = 8  │ SE = -6 │ -6 >  8? Não. Coloque o 8 à direita do 6.
[-6 8 20 -2 4]  │ NTI = -2 │ SE = 20 │ 20 > -2? Sim. Mova 20 uma posição para a direita.
[-6 8 20 20 4]  │ NTI = -2 │ SE = 8  │ 8  > -2? Sim. Mova 8 uma posição para a direita.
[-6 8 8 20 4]   │ NTI = -2 │ SE = -6 │ -6 > -2? Não. Mova o -2 à direita do -6.
[-6 -2 8 20 4]  │ NTI = 4  │ SE = 20 │ 20 >  4? Sim. Mova 20 uma posição para a direita.
[-6 -2 8 20 20] │ NTI = 4  │ SE = 8  │ 8  >  4? Sim. Mova 8 um aposição para a direita.
[-6 -2 8 8 20]  │ NTI = 4  │ SE = -2 │ -2 >  4? Não. Coloque o 4 à direita do -2.
```

# Quick sort

Identifique o `elemento pivô` em um array. Ele pode ser:

- O primeiro elemento.
- O último elemento.
- Um elemento aleatório.
- O elemento central

Coloque tudo que é menor que o pivô no array esquerdo e tudo que é maior que o pivô no array direito.

Repita o processo para o array esquerdo e direito individuais até que você tenha um array de tamanho 1 que é ordenado por definição.

Repetidamente concatene o array esquerdo, o pivô e o array direito até que sobre 1 array ordenado.

`Pior caso - Big-O: O(n²)`
`Caso médio - Big-θ: O(n log n)`

```
function quickSort(arr) {
    if(arr.length < 2) {
        return arr;
    }
    let pivot = arr[arr.length - 1];
    let left = [];
    let right = [];
    for(let i = 0; i < arr.length - 1; i++) { ──────────────────▶ n
        if(arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]; ───▶ n
}
```

```
              [-6, 20, 8, -2, 4]

            Esquerdo  Pivô  Direito
            [-6, -2]    4   [8, 20]

Esquerdo  Pivô  Direito   Esquerdo  Pivô  Direito
    [-6]   [-2]     []       [8]     [20]    []

              [-6, -2] [4] [8, 20]
              [-6, -2, 4, 8, 20]
```

# Merge Sort

`Divida` o array em `subarrays`, cada um contendo `apenas um elemento` (um array contendo um elemento é considerado ordenado).

`Repetidamente mescle os subarrays` para produzir novos `subarrays ordenados` até que exista apenas um `subarray restante`. Este será o array ordenado.

`Big-O: O(n log n)`

```
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }

    let middle = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, middle);
    let rightArr = arr.slice(middle);
    return merge(mergeSort(leftArr), mergeSort(rightArr)); ───▶ n
}

function merge(leftArr, rightArr) {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) { ─────────────────────▶ log n
            sortedArr.push(leftArr.shift());
        } else {
            sortedArr.push(rightArr.shift());
        }
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}
```

```
  [-6, 20, 8, -2, 4]  │
 [-6, 20] [8, -2, 4]  │
[-6] [20] [8] [-2, 4] │
[-6] [20] [8] [-2] [4]│
                      │
 [-6] [20]            │ [-6] [20] => []. Esquerdo e direito não estão vazios. -6 < 20.
                      │ [] [20] => [-6]. Esquerdo está vazio. Mova o array direito.
 [-6, 20]             │ [] [] => [-6, 20]
                      │
         [8] [-2] [4] │ [8] [-2, 4] => []. Esquerdo e direito não estão vazios. -2 < 8.
                      │ [8] [4] => [-2]. Esquerdo e direito não estão vazios. 4 < 8.
                      │ [8] [] => [-2, 4]. Direito não está vazio. Mova o array esquerdo.
           [-2, 4, 8] │ [] [] => [-2, 4, 8]
                      │
  [-6, 20] [-2, 4, 8] │ [-6, 20] [-2, 4, 8] => []. Esquerdo e direito não estão vazios. -6 < -2.
                      │ [20] [-2, 4, 8] => [-6]. Esquerdo e direito não estão vazios. -2 < 20.
                      │ [20] [4, 8] => [-6, -2]. Esquerdo e direito não estão vazios. 4 < 20.
                      │ [20] [8] => [-6, -2, 4]. Esquerdo e direito não estão vazios. 8 < 20.
                      │ [20] [] => [-6, -2, 4, 8]. Direito está vazio. Mova o array esquerdo.
  [-6, -2, 4, 8, 20]  │ [] [] => [-6, -2, 4, 8, 20]
```

# Cartesian Product

Na matemática, especificamente na teoria dos conjuntos, o `produto cartesiano` de dois conjuntos `A` e `B`, denotado por `A × B`, é o conjunto de todos os `pares ordenados (a, b)` onde `a` está contido em `A` e `b` está contido em `B`.

```
  │   1  │   2  │   3
──┼──────┼──────┼──────
x │(x, 1)│(x, 2)│(x, 3)
y │(y, 1)│(y, 2)│(y, 3)
z │(z, 1)│(z, 2)│(z, 3)
```

```
const A = [1, 2];
const B = [3, 4];
A x B = [[1, 3], [1, 4], [2, 3], [2, 4]];

const C = [1, 2];
const D = [3, 4, 5];
C x D = [[1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]];
```

`Big-O: O(m · n), pois os conjuntos podem ter tamanhos diferentes.`

```
function cartesianProduct(arr1, arr2) { ─────────▶ m · n
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      result.push([arr1[i], arr2[j]]);
    }
  }

  return result;
}
```

# Tower of Hanoi

Nós temos 3 varas e um número de discos de diâmetros variados. O objetivo do enigma é mover a pilha inteira para a última haste obedecendo as regras a seguir:

- Apenas um disco pode ser movido por vez.
- Cada movimento consiste em pegar o disco superior de uma pilha e mover para o topo de outra pilha e mover para o topo.
- Nenhum disco pode ser colocado no topo de um disco que é menor.

Solução:

- Mude os discos n - 1 de A para B, usando C.
- Mude o último disco do A para o C.
- Mude o disco n - 1 do B para o C, usando o A.

```
  │     │     │
 ###    │     │
#####   │     │

  │     │     │
  │     │     │
#####  ###    │

  │     │     │
  │     │     │
  │    ###  #####

  │     │     │
  │     │    ###
  │     │   #####
```

```
function towerOfHanoi(n, origin, auxiliar, destiny) {
  if (n === 1) {
    console.log(`Move disk 1 from ${origin} to ${destiny}`);
    return;
  }
  towerOfHanoi(n - 1, origin, destiny, auxiliar);
  console.log(`Move disk ${n} from ${origin} to ${destiny}`);
  towerOfHanoi(n - 1, auxiliar, origin, destiny);
}
```