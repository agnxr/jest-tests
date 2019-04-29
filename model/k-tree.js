'use strict'

const Queue = require('./queue');

const TreeNode = require('./tree-node');

const KTree = class {
  constructor() {
    this.root = null;
  }

  breadthFirstSearch(callback) {
    let current = null;
    let queue = new Queue();
    queue.enqueue(this.root);

    while(queue.back) {
      current = queue.dequeue();

      callback(current);
      current.value.children.forEach(child => queue.enqueue(child));
    }
  }

  insert(value, parent) {
    let treeNode = new TreeNode(value);
    if (!this.root) {
      this.root = treeNode;
      return this;
    }

    this.breadthFirstSearch((node) => {
      if (parent === node.value.value) {
        node.value.children.push(treeNode);
        return;
      }
    });

  }

  removeByValue(value) {
    // TODO: Ender
  }
};

module.exports = KTree;
