'use strict';

require('jest');
const MockKTree = require('../mock/k-tree');

const findKTreeLeaves = require('../../lib/findKTreeLeaves');

describe('findKTreeLeaves()', () => {
  describe('valid input', () => {
    it('returns leaves from KTree root', () => {
      const mKTree = new MockKTree();
      expect(findKTreeLeaves(mKTree.twoLevelTree.root)).toMatchObject(mKTree.twoLevelTreeLeaves);
      expect(findKTreeLeaves(mKTree.threeLevelTree.root)).toMatchObject(mKTree.threeLevelTreeLeaves);
    });
    it('returns null for null root', () => {
      const mKTree = new MockKTree();
      expect(findKTreeLeaves(mKTree.emptyTree.root)).toMatchObject([]);
    });
  });
  describe('invalid input', () => {
    it('throws for undefined', () => {
      expect(() => { findKTreeLeaves() }).toThrow();
    });
    it('throws non root', () => {
      const mKTree = new MockKTree();
      expect(() => { findKTreeLeaves(mKTree.twoLevelTreeLeaves) }).toThrow();
    });
  });
});
