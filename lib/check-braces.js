'use strict';

const Stack = require('../model/stack');

const checkBraces = function(string) {
  if (typeof(string) !== 'string' || string === undefined) throw new Error(`Error: Invalid input: ${string}`);
  let search = true;
  let stack = new Stack();

  while (search) {
    const brace = /{|}/.exec(string);
    if (brace === null) {
      search = false;
    } else {
      string = string.slice(brace.index+1);
      if (brace[0] === '{') {
        stack.push('{');
      } else {
        if (stack.size < 1) return false;
        stack.pop();
      }
    }
  }
  if (stack.size > 0) return false;
  return true;
};

module.exports = checkBraces;
