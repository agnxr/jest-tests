'use strict';

require('jest');
const MockKTree = require('../mock/k-tree');
const KTree = require('../../model/k-tree');

const sumKTree = require('../../lib/sumKTree');

describe('sumKTree()', function() {
  describe('valid input', () => {
    it('returns sum of all tree nodes', () => {
      const mKT = new MockKTree();
      expect(sumKTree(mKT.threeLevelTree)).toBe(36);
    });
    it('returns null for tree with root null', () => {
      const mKT = new MockKTree();
      expect(sumKTree(mKT.emptyTree)).toBeNull();
    });
  });
  describe('invalid input', () => {
    it('throws for undefined', () => {
      expect(() => { sumKTree() }).toThrow();
    });
    it('throws for not KTree', () => {
      expect(() => { sumKTree({root: null}) }).toThrow();
    });
  });
});
