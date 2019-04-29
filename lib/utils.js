'use strict';

const map = function (inputArray, callback) {
  if (!inputArray || !callback || typeof(callback) !== 'function') throw new Error(`Error: Invalid input: ${inputArray}, ${callback}`);
  let index = 0;
  let outputArray = [];
  while(index < inputArray.length) {
    outputArray.push(callback(inputArray[index]));
    index++;
  }
  return outputArray;
};

const filter = function (inputArray, callback) {
  if (!inputArray || !callback || typeof(callback) !== 'function') throw new Error(`Error: Invalid input: ${inputArray}, ${callback}`);
  let index = 0;
  let outputArray = [];
  while(index < inputArray.length) {
    if (callback(inputArray[index])) outputArray.push(inputArray[index]);
    index++;
  }
  return outputArray;
};

const reduce = function (inputArray, callback) {
  if (!inputArray || !callback || typeof(callback) !== 'function') throw new Error(`Error: Invalid input: ${inputArray}, ${callback}`);
  let index = 0;
  let output = 0;
  while(index < inputArray.length) {
    output = callback(output || 0, inputArray[index]);
    index++;
  }
  return output;
};

module.exports = {
  map: map,
  filter: filter,
  reduce: reduce,
};
