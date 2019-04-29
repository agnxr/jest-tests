'use strict';

const HashTable = require('../model/hash-table');

const sortAnagrams = function(arrayOfWords) {
  if (!arrayOfWords || !Array.isArray(arrayOfWords)) throw new Error(`Error: Invalid input: ${arrayOfWords}`);
  let AnagramsHT = new HashTable();
  let resultArr = [];

  //place all items in the hashtable
  for (let index in arrayOfWords) {
    AnagramsHT.set(AnagramsHT.hashkey(arrayOfWords[index]), arrayOfWords[index]);
  }

  // get a list of the keys
  let AnagramKeys = Object.keys(AnagramsHT.getTable());

  // concat each key's array to the result
  for (let index in AnagramKeys) {
    resultArr = resultArr.concat(AnagramsHT.memory[AnagramKeys[index]]);
  }

  return resultArr;
};

module.exports = sortAnagrams;
