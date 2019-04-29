'use strict';

require('jest');
const Mk = require('../mock/sll');

const findNthNodeFromEnd = require('../../lib/findNthNodeFromEnd');

describe('findNthNodeFromEnd()', function() {
  describe('valid input', () => {
    it('returns the nth node from the end', () => {
      const mk = new Mk();
      expect(findNthNodeFromEnd(3, mk.threeFromEnd)).toMatchObject(mk.threeFromEnd.head);
      expect(findNthNodeFromEnd(2, mk.threeFromEnd)).toMatchObject(mk.twoFromEnd.head);
      expect(findNthNodeFromEnd(1, mk.threeFromEnd)).toMatchObject(mk.oneFromEnd.head);
      expect(findNthNodeFromEnd(0, mk.threeFromEnd)).toMatchObject(mk.zeroFromEnd.head);
    });
    it('returns null if n < sll length', () => {
      const mk = new Mk();
      expect(findNthNodeFromEnd(4, mk.threeFromEnd)).toBeNull;
    });
    it('returns null if n < 0', () => {
      const mk = new Mk();
      expect(findNthNodeFromEnd(-1, mk.threeFromEnd)).toBeNull;
    });
  });
  describe('invalid input', () => {
    it('throws if sll is not SLL', () => {
      expect(() => { findNthNodeFromEnd(1, 1) }).toThrow();
      expect(() => { findNthNodeFromEnd(1, true) }).toThrow();
      expect(() => { findNthNodeFromEnd(1, {obj:'ect'}) }).toThrow();
    });
    it('throws if n is not a number', () => {
      expect(() => { findNthNodeFromEnd('not a number', new Mk().threeFromEnd) }).toThrow();
    });
  });
});
