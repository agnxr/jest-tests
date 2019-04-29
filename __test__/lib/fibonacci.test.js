'use strict';

require('jest');

const f = require('../../lib/fibonacci');

describe('fibonacci', () => {
  describe('iterative()', () => {
    it('returns the nth fibonacci number', () => {
      expect(f.iterative(4)).toBe(3);
      expect(f.iterative(5)).toBe(5);
    });
    it('throws for non int', () => {
      expect(() => { f.iterative(4.5) }).toThrow('input');
    });
    it('throws for negative int', () => {
      expect(() => { f.iterative(-4) }).toThrow('input');
    });
    it('throws for undefined', () => {
      expect(() => { f.iterative() }).toThrow('input');
    });
  });
  describe('recursive()', () => {
    it('returns the nth fibonacci number', () => {
      expect(f.recursive(4)).toBe(3);
      expect(f.recursive(5)).toBe(5);
    });
    it('throws for non int', () => {
      expect(() => { f.recursive(4.5) }).toThrow('input');
    });
    it('throws for negative int', () => {
      expect(() => { f.recursive(-4) }).toThrow('input');
    });
    it('throws for undefined', () => {
      expect(() => { f.recursive() }).toThrow('input');
    });
  });
});
