'use strict';

const KTree = require('../model/k-tree');

const findKTreeLeaves = function(root) {
  if (root === null) return [];
  if (!root || !root.hasOwnProperty('children')) throw new Error(`Error: Invalid input ${root}`);

  let leaves = [];
  const tree = new KTree();
  tree.root = root;

  tree.breadthFirstSearch((currentNode) => {
    if (!currentNode.value.children[0]) leaves.push(currentNode.value);
  });
  return leaves;
};

module.exports = findKTreeLeaves;
