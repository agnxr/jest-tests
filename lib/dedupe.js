'use strict';

const SLL = require('../model/sll');
const Stack = require('../model/stack');

const dedupe = function(head) {
  if (head === null) return null;
  if (!head.hasOwnProperty('value') || !head.hasOwnProperty('next')) throw (`Error: Invalid input: ${head}`);
  const deduped = new SLL();
  const stack = new Stack();

  let currentNode = head;

  deduped.insertEnd(currentNode.value);
  stack.push(currentNode);

  while (currentNode.next !== null) {
    currentNode = currentNode.next;
    if (stack.peek().value !== currentNode.value) deduped.insertEnd(currentNode.value);
    stack.push(currentNode.value);
  }
  return deduped;
};

module.exports = dedupe;
