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
  },
};

module.exports = fibonacci;
