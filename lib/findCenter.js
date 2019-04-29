'use strict';

const findCenter = function(sll) {
  if (!sll || !sll.hasOwnProperty('head')) throw new Error(`ERR: invalid input: ${sll}`);
  if (!sll.head) return null;

  let endNode = sll.head;
  let centerNode = sll.head;
  let count = 1;

  while (endNode.next !== null) {
    endNode = endNode.next;
    count++;
    if (count !== 1 && count % 2 !== 0) centerNode = centerNode.next;
  }
  return centerNode;
};

module.exports = findCenter;
