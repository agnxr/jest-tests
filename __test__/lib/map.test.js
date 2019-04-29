'use strict';

require('jest');
const map = require('../../lib/utils').map;

describe('map()', () => {
  describe('valid input', () => {
    it('returns new array with altered values', () => {
      expect(map([1,2,3], current => current + 1)).toMatchObject([2,3,4]);
    });
    it('returns empty array for empty array', () => {
      expect(map([], current => current + 1)).toMatchObject([]);
    });
  });
  describe('invalid input', () => {
    it('throws error for invalid array', () => {
      expect(() => { map(undefined, () => null) }).toThrow('Invalid');
    });
  });
});
