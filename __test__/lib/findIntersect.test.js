'use strict';

require('jest');
const Mk = require('../mock/sll');

const findIntersect = require('../../lib/findIntersect');

describe('findIntersect()', function() {
  describe('valid input', () => {
    it('(two identical SLLs) returns matching node', () => {
      const mk = new Mk();
      expect(findIntersect(mk.intersectMain.head, mk.intersectMain.head)).toMatchObject(new Mk().intersectMain.head);
    });
    it('(two same length SLLs) returns matching node', () => {
      const mk = new Mk();
      expect(findIntersect(mk.intersectMain.head, mk.intersectSameLength.head)).toMatchObject(mk.intersectSublist.head);
    });
    it('(different length SLLs) returns matching node', () => {
      const mk = new Mk();
      expect(findIntersect(mk.intersectMain.head, mk.intersectDifferentLength.head)).toMatchObject(mk.intersectSublist.head);
    });
    it('(sublist SLL) returns matching node', () => {
      const mk = new Mk();
      expect(findIntersect(mk.intersectMain.head, mk.intersectSublist.head)).toMatchObject(mk.intersectSublist.head);
    });
    it('(non intersecting SLLs) returns null', () => {
      const mk = new Mk();
      expect(findIntersect(mk.intersectMain.head, mk.fiveNodeSLL.head)).toBeNull();
    });
  });
  describe('invalid input', () => {
    it('throws for invalid input', () => {
      const mk = new Mk();
      expect(() => {findIntersect()}).toThrow();
      expect(() => {findIntersect(mk.intersectMain.head)}).toThrow();
      expect(() => {findIntersect(mk.intersectMain, mk.intersectMain.head)}).toThrow(); // SLL is not the same as a head
      expect(() => {findIntersect(mk.intersectMain.head, mk.intersectMain)}).toThrow(); // SLL is not the same as a head
      expect(() => {findIntersect({next: null}, mk.intersectMain.head)}).toThrow();
      expect(() => {findIntersect(mk.intersectMain.head, {next:null})}).toThrow();
      expect(() => {findIntersect({value:0}, mk.intersectMain.head)}).toThrow();
      expect(() => {findIntersect(mk.intersectMain.head, {value:0})}).toThrow();
    });
  });
});
