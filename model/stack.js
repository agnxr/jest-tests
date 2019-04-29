'use strict';

const Nd = require('./nd');

module.exports = class {
  constructor(maxSize=1048) {
    this.top = null;
    this.maxSize = maxSize;
    this.size = 0;
  }
  push(value) {
    if (this.size === this.maxSize) {
      throw new Error('Stack overflow!');
    }

    let node = new Nd(value);

    node.next = this.top;
    this.top = node;
    this.size++;
    return this.top;
  }

  pop() {
    if (this.size === 0) {
      throw new Error('Stack underflow!');
    }

    let temp = this.top;

    this.top = temp.next;
    temp.next = null;
    this.size--;

    return temp;
  }

  peek() {
    return this.top;
  }
};
