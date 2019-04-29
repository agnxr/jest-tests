'use strict';

const Nd = require('./nd');

class SLL {
  constructor() { // Big-O runtime:  O(1)
    this.head = null;
  }

  insertHead(val) { // Big-O runtime:  O(1)
    let nd = new Nd(val);

    nd.next = this.head;
    this.head = nd;
    return this;
  }

  insertEnd(val) { // Big-O runtime:  O(1) if no head, O(n) if there is a head
    let nd = new Nd(val);

    if(!this.head) {
      this.head = nd;
      return this;
    }
    let current;
    for (current = this.head ; current.next ; current = current.next);
    current.next = nd;
    return this;
  }

  remove(offset) { // Big-O runtime:  O(1) if no head, O(n) otherwise
    if (this.head === null) return null;

    let temp = this.head;

    if (offset === 0) // if head needs to be removed
    {
      this.head = temp.next;
      return this;
    }

    for (let i = 0; temp != null && i < offset - 1; i++) { // find the node prev to one to be deleted
      temp = temp.next;
    }

    if (temp === null || temp.next === null) {
      return null;
    }

    // node temp.next is the node to be deleted
    // we need to store a pointer to next node after
    let next = temp.next.next;

    temp.next = next; // unlink node from list
    return this;
  }

  reverse() { // Big-O runtime:  O(n)
    let prevNode = null;
    let currNode = this.head;
    let nextNode = null;

    while (currNode !== null)
    {
      nextNode = currNode.next;
      currNode.next = prevNode;
      prevNode = currNode;
      currNode = nextNode;
    }
    this.head = prevNode;
    return this;
  }

  // findNthNodeFromEnd(n) {
  //   if (isNaN(n)) throw new Error(`Error: Invalid input: ${n}`);

  //   if (n < 0) return null;

  //   let nMarker = this.head;
  //   let nthNodeFromEnd = this.head;
  //   while (n > 0) {
  //     if (nMarker.next === null) return null;
  //     nMarker = nMarker.next;
  //     n--;
  //   }

  //   while (nMarker.next) {
  //     nMarker = nMarker.next;
  //     nthNodeFromEnd = nthNodeFromEnd.next
  //   }

  //   return nthNodeFromEnd;
  // }
}

module.exports = SLL;
