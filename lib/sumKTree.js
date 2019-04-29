'use strict';

const KTree = require('../model/k-tree');

const sumKTree = function(tree) {
  if (!(tree instanceof KTree)) throw (`Error: Invalid input: ${tree}`);
  if (tree.root === null) return null;

  let total = 0;

  tree.breadthFirstSearch((currentNode) => {
    total += currentNode.value.value;
  });
  return total;
};

module.exports = sumKTree;
