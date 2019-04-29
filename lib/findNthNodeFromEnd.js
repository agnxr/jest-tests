'use strict';

const findNthNodeFromEnd = function (n, sll) {
  if (isNaN(n)) throw new Error(`Error: Invalid input: ${n}`);
  if (!sll || !sll.hasOwnProperty('head')) throw new Error(`ERR: invalid input: ${sll}`);

  if (n < 0) return null;

  let nMarker = sll.head;
  let nthNodeFromEnd = sll.head;
  while (n > 0) {
    if (nMarker.next === null) return null;
    nMarker = nMarker.next;
    n--;
  }

  while (nMarker.next) {
    nMarker = nMarker.next;
    nthNodeFromEnd = nthNodeFromEnd.next;
  }

  return nthNodeFromEnd;
};

module.exports = findNthNodeFromEnd;
