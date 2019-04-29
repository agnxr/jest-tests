'use strict';

require('jest');
const findArrayIntersect = require('../../lib/findArrayIntersect');

describe('findArrayIntersect()', () => {
  describe('valid input', () => {
    it('returns all shared num values', () => {
      expect(findArrayIntersect([1,2,4,5],[9,1,3,5])).toMatchObject([1,5]);
    });
    it('returns all shared string values', () => {
      expect(findArrayIntersect(['this','is','a','test'],['test','this'])).toMatchObject(['this','test']);
    });
    it('returns all shared mixed values', () => {
      expect(findArrayIntersect(['this',7,'is',22,'a','test'],['test',22,'this'])).toMatchObject(['this',22,'test']);
    });
  });
  describe('invalid input', () => {
    it('throws for no input, or non array inputs', () => {
      expect(() => { findArrayIntersect() }).toThrow('input');
      expect(() => { findArrayIntersect([]) }).toThrow('input');
      expect(() => { findArrayIntersect('a', []) }).toThrow('input');
      expect(() => { findArrayIntersect([], 'b') }).toThrow('input');
    });
  });
});
