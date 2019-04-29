'use strict';

require('jest');
const Mk = require('../mock/sll');

const dedupe = require('../../lib/dedupe');

describe('dedupe()', () => {
  describe('valid input', () => {
    it('returns SLL with no duplicate nodes', () => {
      expect(dedupe(new Mk().sllWithDuplicates.head)).toMatchObject(new Mk().sllWithNoDuplicates);
      expect(dedupe(new Mk().sllWithNoDuplicates.head)).toMatchObject(new Mk().sllWithNoDuplicates);
    });
    it('returns null for head null', () => {
      expect(dedupe(null)).toBeNull();
    });
  });
  describe('invalid input', () => {
    it('throws for non Node input', () => {
      expect(() => { dedupe(4) }).toThrow();
    });
  });
});
