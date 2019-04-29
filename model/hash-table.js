'use strict';

class HashTable {
  constructor(size=1024) {
    this.size = size;
    this.counter = 0;
    this.memory = {};
  }

  hashkey(key) {
    let hash = key.toLowerCase().split('').sort().join('');
    return hash;
  }

  set(key, value) {
    if (this.counter < this.size) {
      this.memory[this.hashkey(key)] = this.memory[this.hashkey(key)] ? [...this.memory[this.hashkey(key)], value] : [value];
      this.memory[this.hashkey(key)].sort(function(a, b) {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
      });
      this.counter++;
      return this.memory[this.hashkey(key)];
    } else {
      throw new Error('Size error: Cannot fit');
    }
  }

  getTable() {
    return this.memory;
  }

  get(key) {
    return this.memory[this.hashkey(key)] ? this.memory[this.hashkey(key)] : null;
  }

  remove(key) {
    let address = this.hashkey(key);
    if (this.memory[address]) this.counter--;
    return this.memory[address] ? delete this.memory[address] : null;
  }
}

module.exports = HashTable;
