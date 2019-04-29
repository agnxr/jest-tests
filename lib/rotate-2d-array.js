'use strict';

const rotate2dArray = function(array2d) {
  if (!array2d || !array2d.length || !array2d[0].length) throw new Error(`Error: Invalid input: ${array2d}`);
  const startHeight = array2d.length;
  // O(n)
  const startWidth = array2d.reduce((prev, curr) => prev.length < curr.length ? curr : prev).length;
  // O(1)
  let startWidthIndex = 0;
  let startHeightIndex = 0;
  const outputArray2d = [];
  // O(n)
  while (startWidthIndex < startWidth) {
    if (startHeightIndex === 0) outputArray2d[startWidthIndex] = [];

    let startValue = array2d[startHeightIndex][startWidthIndex];
    if (startValue !== undefined) outputArray2d[startWidthIndex][startHeight - startHeightIndex - 1] = startValue;

    if (startHeightIndex === startHeight - 1) startWidthIndex++;
    startHeightIndex = (startHeightIndex + 1) % startHeight;
  }
  return outputArray2d;
};

module.exports = rotate2dArray;
