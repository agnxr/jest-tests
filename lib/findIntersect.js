'use strict';

const SLL = require('../model/sll');

const findIntersect = function(sllHeadOne, sllHeadTwo) {
  // O(1)
  const invalidInput = !sllHeadOne || !sllHeadTwo ? true
    : !sllHeadOne.hasOwnProperty('next') || !sllHeadTwo.hasOwnProperty('next') ? true
      : !sllHeadOne.hasOwnProperty('value') || !sllHeadTwo.hasOwnProperty('value') ? true
        : false;
  if (invalidInput) throw new Error(`Error: Invalid input: ${sllHeadOne} , ${sllHeadTwo}`);

  // O(1)
  if (sllHeadOne === sllHeadTwo) return sllHeadOne;

  // O(n)
  const reversedOne = new SLL();
  const reversedTwo = new SLL();
  // O(1)
  reversedOne.head = sllHeadOne;
  reversedTwo.head = sllHeadTwo;
  // O(n)
  reversedOne.reverse();
  reversedTwo.reverse();

  // O(1)
  if (reversedOne.head.value !== reversedTwo.head.value) return null;
  // O(1)
  let current = {
    one: reversedOne.head,
    two: reversedTwo.head,
  };
  // O(1)
  let intersection = reversedOne.head;

  // O(n)
  while (current.one.next && current.two.next && current.one.next.value === current.two.next.value) {
    current.one = current.one.next;
    current.two = current.two.next;
    intersection = current.one;
  }

  // O(n)
  reversedOne.reverse();
  reversedTwo.reverse();

  // O(1)
  return intersection;
};

module.exports = findIntersect;
