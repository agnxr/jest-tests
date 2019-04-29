'use strict';

require('jest');

const binaryArraySearch = require('../../lib/binary-array-search');

describe('binarySearchArray()', function() {
  describe('valid input', () => {
    it('returns an object {index, value} where n is in the array', () => {
      expect(binaryArraySearch([0,1,2,3], 2)).toMatchObject({ value: 2, index: 2});
      expect(binaryArraySearch([2,3,4,5], 2)).toMatchObject({ value: 2, index: 0});
      expect(binaryArraySearch([-1,0,1,2], 2)).toMatchObject({ value: 2, index: 3});
    });
    it('returns null where n not in array', () => {
      expect(binaryArraySearch([0,1,2,3], 4)).toBeNull();
      expect(binaryArraySearch([0,1,3,4], 2)).toBeNull();
      expect(binaryArraySearch([0,1,2,4], -1)).toBeNull();
    });
  });
  describe('invalid input', () => {
    it('throws for invalid input', () => {
      expect(() => { binaryArraySearch(undefined, 2) }).toThrow();
      expect(() => { binaryArraySearch([2]) }).toThrow();
    });
  });
});
