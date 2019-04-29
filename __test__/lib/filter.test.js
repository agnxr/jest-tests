'use strict';

require('jest');
const filter = require('../../lib/utils').filter;

describe('filter()', () => {
  describe('valid input', () => {
    it('returns new array with altered values', () => {
      expect(filter([1,2,3], current => current > 1)).toMatchObject([2,3]);
    });
    it('returns empty array for empty array', () => {
      expect(filter([], current => current > 1)).toMatchObject([]);
    });
  });
  describe('invalid input', () => {
    it('throws error for invalid array', () => {
      expect(() => { filter(undefined, () => null) }).toThrow('Invalid');
    });
  });
});
