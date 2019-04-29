'use strict';

require('jest');
const MockKTree = require('../mock/k-tree');

const findKTreeMaxChildren = require('../../lib/findKTreeMaxChildren');

describe('findKTreeMaxChildren()', () => {
  describe('valid input', () => {
    it('returns number of children had by any node', () => {
      const mKT = new MockKTree();
      expect(findKTreeMaxChildren(mKT.oneLevelTree)).toBe(0);
      expect(findKTreeMaxChildren(mKT.twoLevelTree)).toBe(3);
    });
    it('returns null for null nodes', () => {
      const mKT = new MockKTree();
      expect(findKTreeMaxChildren(mKT.emptyTree)).toBeNull();
    });
  });
  describe('invalid input', () => {
    it('throws for undefined input', () => {
      expect(() => { findKTreeMaxChildren() }).toThrow();
    });
    it('throws for non ktree input', () => {
      expect(() => { findKTreeMaxChildren({root: null}) }).toThrow();
    });
  });
});
