'use strict';

require('jest');
const Mk = require('../mock/sll');
const SLL = require('../../model/sll');

describe('SLL()', function() {
  describe('constructor', () => {
    it('returns a new SLL with head: null', () => {
      const s = new SLL();
      expect(s).toBeInstanceOf(SLL);
      expect(s).toHaveProperty('head');
      expect(s.head).toBe(null);
    });
  });
  describe('.insertHead', () => {
    it('adds a node to head, returns this', () => {
      const mk = new Mk();
      expect(mk.emptySLL.insertHead(1)).toMatchObject(mk.oneNodeSLL);
    });
    it('inserts a node into head, sets head.next to previous head, returns this', () => {
      const insertHead0 = new Mk().oneNodeSLL.insertHead(0);
      expect(insertHead0).toHaveProperty('head');
      expect(insertHead0.head.value).toBe(0);
      expect(insertHead0.head.next).toMatchObject(new Mk().oneNodeSLL.head);
    });
  });
  describe('.insertEnd', () => {
    it('adds a node to end (head), returns this', () => {
      const mk = new Mk();
      expect(mk.emptySLL.insertEnd(1)).toMatchObject(mk.oneNodeSLL);
    });
    it('adds a node to end (head.next), returns this', () => {
      const mk = new Mk();
      mk.oneNodeSLL.head.value = 0;
      expect(mk.oneNodeSLL.insertEnd(1)).toMatchObject(mk.twoNodeSLL)
    });
  });
  describe('.remove(offset)', () => {
    it('removes only node, returns empty SLL', () => {
      const mk = new Mk();
      expect(mk.oneNodeSLL.remove(0)).toMatchObject(mk.emptySLL);
    });
    it('removes head, returns SLL', () => {
      const mk = new Mk();
      expect(mk.twoNodeSLL.remove(0)).toMatchObject(mk.oneNodeSLL);
    });
    it('removes last node, returns SLL', () => {
      const mk = new Mk();
      mk.oneNodeSLL.head.value = 0;
      expect(mk.twoNodeSLL.remove(1)).toMatchObject(mk.oneNodeSLL);
    });
    it('removes middle node, returns SLL', () => {
      const mk = new Mk();
      expect(mk.threeNodeSLL.remove(1)).toMatchObject(mk.twoNodeSLL);
    });
    it('returns null if offset > length', () => {
      const mk = new Mk();
      expect(mk.fiveNodeSLL.remove(12)).toBeNull();
    });
    it('returns null if SLL empty', () => {
      const mk = new Mk();
      expect(mk.emptySLL.remove(0)).toBeNull();
    });
  });
  describe('.reverse()', () => {
    it('returns original SLL if only one node', () => {
      const mk = new Mk();
      expect(mk.oneNodeSLL.reverse()).toMatchObject(new Mk().oneNodeSLL);
    });
    it('returns reversed SLL', () => {
      const mk = new Mk();
      const checkReversed = new Mk().threeNodeSLL;
      checkReversed.head.value = 1;
      checkReversed.head.next.next.value = 0;
      expect(mk.threeNodeSLL.reverse()).toMatchObject(checkReversed);
    });
    it('returns empty SLL if SLL empty', () => {
      const mk = new Mk();
      expect(mk.emptySLL.reverse()).toMatchObject(new Mk().emptySLL);
    });
  });

});
