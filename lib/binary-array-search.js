'use strict';

const binaryArraySearch = function(array, n) {
  if(!array || typeof(array) !== 'object' || !array.hasOwnProperty('length') || isNaN(n)) throw Error(`Error: Invalid input: ${array}, ${n}`);
  let bottom = 0;
  let top = array.length - 1;
  let center;
  let guess;

  while (bottom <= top) {
    center = (bottom + top) / 2 | 0;
    guess = array[center];
    if (guess < n) bottom = center + 1;
    else if (guess > n) top = center - 1;
    else return { value: n, index: center };
  }
  return null;
};

module.exports = binaryArraySearch;
