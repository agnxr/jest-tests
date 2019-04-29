'use strict';

const findArrayIntersect = function(arrayA, arrayB) {
  if(!arrayA || !arrayB || !Array.isArray(arrayA) || !Array.isArray(arrayB)) throw new Error(`Error: Invalid input: ${arrayA}, ${arrayB}`);
  // O(n^2) [bad]
  const intersectionArray = [];
  for (let indexA = 0; indexA < arrayA.length; indexA++) {
    for (let indexB = 0; indexB < arrayB.length; indexB++) {
      if (arrayA[indexA] === arrayB[indexB]) {
        if (!intersectionArray.includes(arrayA[indexA])) intersectionArray.push(arrayA[indexA]);
        break;
      }
    }
  }
  return intersectionArray;
};

module.exports = findArrayIntersect;
