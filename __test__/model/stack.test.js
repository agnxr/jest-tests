'use strict';

const Stack = require('../../model/stack');
require('jest');

describe('Stack Data Structure Module', function () {
  beforeEach(() => this.stack = new Stack());

  describe('default properties', () => {
    it('should create a new instance of a Stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });
    it('should have a default value of null assigned to the top property', () => {
      expect(this.stack.top).toBeNull();
    });
    it('should have a default value of 0 assigned to the size property', () => {
      expect(this.stack.size).toEqual(0);
    });
    it('should have a maxSize property with a default value of 1048', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });
  describe('push()', () => {
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      expect(this.stack.size).toEqual(20);
    });
    it('should add a new node with the value of 1 to the top of the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.value).toEqual(1);
    });
    it('should throw an error when maxSize is met', () => {
      expect(() => {
        for (let i = 0; i <= 1048; i++) {
          this.stack.push(2);
        }
      }).toThrow(/overflow/);
    });
  });
  describe('pop()', () => {
    it('should remove the top most node from the stack', () => {
      this.stack.push(1);
      expect(this.stack.top.value).toEqual(1);
      expect(this.stack.pop().value).toEqual(1);
      expect(this.stack.top).toBeNull();
    });
    it('should throw an error if stack is empty', () => {
      expect(this.stack.top).toBeNull();
      expect(() => {
        this.stack.pop();
      }).toThrow(/underflow/);
    });
  });
  describe('peek()', () => {
    it('should return the top of the stack', () => {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      expect(this.stack.peek().value).toEqual(1);
    });
  });
});
