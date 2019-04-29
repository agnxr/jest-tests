'use strict';

require('jest');
const Nd = require('../../model/nd');

describe('Nd()', function() {
  describe('valid input', () => {
    it('returns new node with value: input, and next: null', () => {
      const nd3 = new Nd(3)
      expect(nd3).toBeInstanceOf(Nd);
      expect(nd3.value).toBe(3);
      expect(nd3.next).toBeNull();
    });
  });
  describe('invalid input', () => {

    it('throws error if no input', () => {
      expect(() => {new Nd()}).toThrow(Error);
    });
    it('throws error if input null', () => {
      expect(() => {new Nd(null)}).toThrow(Error);
    });
  });
});
