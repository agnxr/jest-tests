'use strict';

require('jest');

const checkBraces = require('../../lib/check-braces');

describe('checkBraces()', function() {
  describe('valid input', () => {
    it('returns true if {s and }s always occur in nesting pairs', () => {
      expect(checkBraces('{}')).toBe(true);
      expect(checkBraces('{}{{}}')).toBe(true);
      expect(checkBraces('{{}{}}')).toBe(true);
      expect(checkBraces('{{}{}}')).toBe(true);
    });
    it('returns false if {s are not closed', () => {
      expect(checkBraces('{')).toBe(false);
      expect(checkBraces('{{}{}')).toBe(false);
      expect(checkBraces('{{{}}')).toBe(false);
    });
    it('returns false if }s are not previously opened', () => {
      expect(checkBraces('}')).toBe(false);
      expect(checkBraces('{}{}}')).toBe(false);
      expect(checkBraces('{{}}}')).toBe(false);
    });
    it('returns true for string with no {s or }s', () => {
      expect(checkBraces('no braces')).toBe(true);
    });
    it('returns expected output when other characters are present', () => {
      expect(checkBraces('{ obj1: { val: 4 }, obj2: { val: 9 } }')).toBe(true);
      expect(checkBraces('{ obj1: { val: 4 , obj2: { val: 9 } }')).toBe(false);
      expect(checkBraces('{ obj1: { val: 4 }, obj2:  val: 9 } }')).toBe(false);
    });
  });
  describe('invalid input', () => {
    it('throws for non string input', () => {
      expect(() => { checkBraces({obj: 'ect'}) }).toThrow();
      expect(() => { checkBraces(3) }).toThrow();
    });
    it('throws for undefined input', () => {
      expect(() => { checkBraces() }).toThrow();
    });
  });
});
