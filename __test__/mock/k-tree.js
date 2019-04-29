'use strict';

const KTree = require('../../model/k-tree');

class MockKTree {
  constructor() {
    this.emptyTree = new KTree();
    this.oneLevelTree = new KTree();
    this.twoLevelTree = new KTree();
    this.threeLevelTree = new KTree();

    this.oneLevelTreeLeaves = [{ value: 1, children: [] }];
    this.twoLevelTreeLeaves = [{ value: 2, children: [] }, { value: 3, children: [] }, { value: 4, children: [] }];
    this.threeLevelTreeLeaves = [ { value: 4, children: [] }, { value: 5, children: [] }, { value: 6, children: [] }, { value: 7, children: [] }, { value: 8, children: [] }];

    this.oneLevelTree.root = { value: 1, children: [] }
    this.twoLevelTree.root = { value: 1, children: [ { value: 2, children: [], }, { value: 3, children: [], }, { value: 4, children: [], }, ], }
    this.threeLevelTree.root = { value: 1, children: [ { value: 2, children: [ { value: 5, children: [], }, { value: 6, children: [], }, ], }, { value: 3, children: [ { value: 7, children: [], }, { value: 8, children: [], }, ], }, { value: 4, children: [], }, ], }
  }
}

module.exports = MockKTree;
