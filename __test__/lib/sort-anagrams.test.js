'use strict';

require('jest');

const sortAnagrams = require('../../lib/sortAnagrams');

describe('sortAnagrams()', () => {
  describe('valid input', () => {
    it('returns array of words sorted by anagram', () => {
      expect(sortAnagrams(['one', 'wot', 'reef', 'neo', 'two', 'free'])).toMatchObject(["neo", "one", "two", "wot", "free", "reef"])
    });
    it('returns array of words sorted by anagram, even with duplicates', () => {
      expect(sortAnagrams(['on', 'on', 'no'])).toMatchObject(["no", "on", "on"]);
    });
  });
  describe('invalid input', () => {
    it('throws for undefined', () => {
      expect(() => { sortAnagrams() }).toThrow('input');
    });
    it('throws for non array input', () => {
      expect(() => { sortAnagrams(3) }).toThrow('input');
    });
  });
});
