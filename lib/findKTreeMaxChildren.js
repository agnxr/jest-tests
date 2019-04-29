'use strict';

const KTree = require('../model/k-tree');

const findKTreeMaxChildren = function(tree) {
  if (!tree || !(tree instanceof KTree)) throw new Error(`Error: Invlid input: ${tree}`);
  if (tree.root === null) return null;
  let maxChildren = 0;
  tree.breadthFirstSearch((currentNode) => {
    if (currentNode.value.children.length > maxChildren) maxChildren = currentNode.value.children.length;
  });
  return maxChildren;
};

module.exports = findKTreeMaxChildren;
