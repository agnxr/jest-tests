'use strict';

const SLL = require('../../model/sll');

class MockSLL {
  constructor() {
    this.emptySLL = new SLL();
    this.oneNodeSLL = new SLL();
    this.twoNodeSLL = new SLL();
    this.threeNodeSLL = new SLL();
    this.fourNodeSLL = new SLL;
    this.fiveNodeSLL = new SLL();

    this.intersectMain = new SLL();
    this.intersectSameLength = new SLL();
    this.intersectDifferentLength = new SLL();
    this.intersectSublist = new SLL();

    this.threeFromEnd = new SLL();
    this.twoFromEnd = new SLL();
    this.oneFromEnd = new SLL();
    this.zeroFromEnd = new SLL();
    this.naNFromEnd = new SLL();

    this.sllWithNoDuplicates = new SLL();
    this.sllWithDuplicates = new SLL();

    this.emptySLL.head = null;
    this.oneNodeSLL.head = { value: 1, next: null };
    this.twoNodeSLL.head = { value: 0, next: { value: 1, next: null } };
    this.threeNodeSLL.head = { value: 0, next: { value: .5, next: { value: 1, next: null } } };
    this.fourNodeSLL.head = { value: 0, next: { value: 2, next: { value: 4, next: { value: 6, next: null } } } };
    this.fiveNodeSLL.head = { value: 1, next: { value: 3, next: { value: 5, next: { value: 7, next: { value: 9, next: null } } } } };

    this.intersectMain.head = { value: 9, next: { value: 8, next: { value: 7, next: { value: 6, next: null } } } };
    this.intersectSameLength.head = { value: 11, next: { value: 10, next: { value: 7, next: { value: 6, next: null } } } };
    this.intersectDifferentLength.head = { value: 12, next: { value: 11, next: { value: 10, next: { value: 7, next: { value: 6, next: null } } } } };
    this.intersectSublist.head = { value: 7, next: { value: 6, next: null } };

    this.threeFromEnd.head = { value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: null } } } };
    this.twoFromEnd.head = { value: 1, next: { value: 2, next: { value: 3, next: null } } };
    this.oneFromEnd.head = { value: 2, next: { value: 3, next: null } };
    this.zeroFromEnd.head = { value: 3, next: null };
    this.naNFromEnd.head = null;

    this.sllWithNoDuplicates.head = { value: 0, next: { value: 1, next: { value: 2, next: { value: 3, next: null } } } };
    this.sllWithDuplicates.head = { value: 0, next: { value: 1, next: { value: 1, next: { value: 2, next: { value: 3, next: { value: 3, next: null } } } } } };
  }
}



module.exports = MockSLL;
