'use strict';

require('jest');
const reduce = require('../../lib/utils').reduce;

describe('reduce()', () => {
  describe('valid input', () => {
    it('returns new array with altered values', () => {
      expect(reduce([1,2,3], (previous, current) => previous + current)).toBe(6);
    });
    it('returns empty array for empty array', () => {
      expect(reduce([], (previous, current) => previous + current)).toBe(0);
    });
  });
  describe('invalid input', () => {
    it('throws error for invalid array', () => {
      expect(() => { reduce(undefined, () => null) }).toThrow('Invalid');
    });
  });
});
