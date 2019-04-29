## Whiteboard Challenge 32

### Problem Domain:

[Outputs the Fibonacci sequence number at the given Fibonacci number iteratively] = whiteboardfn.fibItr(Fibonacci number)

generates a Fibonacci sequence result given a Fibonacci sequence iteratively

[Outputs the Fibonacci sequence number at the given Fibonacci number recursively] = whiteboardfn.fibRec(Fibonacci number)

generates a Fibonacci sequence result given a Fibonacci sequence recursively

### Solution:

#### Recursive vs Iterative
To find the nth fibonacci number iteratively calls one calculation per n -- O(n). Whereas the recursive method calls itself twice per value of n, and each subsequent call calls itself twice per n -- O(n!). This is incredibly innefficient for space and time.

#### fibonacci.js
```js
'use strict';

const fibonacci = {
  iterative: function(n) {
    if (n === 0 || n === 1) return n;
    if (!n || typeof n !== 'number') throw new Error(`Error: Invalid input: ${n}`);
    if (n < 0 || !Number.isInteger(n)) throw new Error(`Error: Invalid input: ${n}`);

    const fibonacciArray = [0, 1];

    for (let index = 0; index < (n-1); index++) {
      fibonacciArray.push(fibonacciArray[fibonacciArray.length-1] + fibonacciArray[(fibonacciArray.length) - 2]);
    }

    return fibonacciArray.pop();
  },
  recursive: function(n) {
    if (n === 0 || n === 1) return n;
    if (!n || typeof n !== 'number') throw new Error(`Error: Invalid input: ${n}`);
    if (n < 0 || !Number.isInteger(n)) throw new Error(`Error: Invalid input: ${n}`);

    return this.recursive(n - 1) + this.recursive(n - 2);
  }
}

module.exports = fibonacci;

```

### Demo:

```sh
$ node

> const f = require(`./index`).fibonacci;

> const w = f.recursive[4]
// => 3

> const w = f.iterative[4]
// => 3
```

### Tests: jest

```sh
$ npm test
// 95.26% coverage
// (k-tree, tree-node constructors not covered)
```

### Linter: eslint

```sh
$ npm run linter
```
