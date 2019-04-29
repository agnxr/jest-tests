'use strict';

require('jest');
const Mk = require('../mock/sll');

const findCenter = require('../../lib/findCenter');

describe('findCenter()', function() {
  describe('valid input', () => {
    it('returns null if sll empty', () => {
      const mk = new Mk();
      expect(findCenter(mk.emptySLL)).toBeNull();
    })
    it('returns head if length 1 (odd, special)', () => {
      const mk = new Mk();
      expect(findCenter(mk.oneNodeSLL)).toMatchObject(mk.oneNodeSLL.head);
    });
    it('returns 2nd node if length 4 (even)', () => {
      const mk = new Mk();
      expect(findCenter(mk.fourNodeSLL)).toMatchObject(mk.fourNodeSLL.head.next);
    });
    it('returns 3rd node if length 5 (odd)', () => {
      const mk = new Mk();
      expect(findCenter(mk.fiveNodeSLL)).toMatchObject(mk.fiveNodeSLL.head.next.next);
    });
  });
  describe('invalid input', () => {
    it('throws error for no input', () => {
      expect(() => { findCenter() }).toThrow();
    })
    it('throws error for non-sll input', () => {
      expect(() => { findCenter(1) }).toThrow();
      expect(() => { findCenter(true) }).toThrow();
      expect(() => { findCenter({obj:'ect'}) }).toThrow();
    })
  });
});
