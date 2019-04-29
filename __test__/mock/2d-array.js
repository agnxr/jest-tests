'use strict';

class Mock2dArray {
  constructor() {
    this.two_x_two = [
      [0, 1],
      [2, 3],
    ];
    this.two_x_two_r = [
      [2, 0],
      [3, 1],
    ]
    this.two_x_three = [
      [0, 1],
      [2, 3],
      [4, 5],
    ]
    this.three_x_two_r = [
      [4, 2, 0],
      [5, 3, 1],
    ]
    this.three_x_three_w_stub = [
      [0,1,2],
      [3,4,5,'stub'],
      [6,7,8],
    ],
    this.three_x_three_w_stub_r = [
      [6,3,0],
      [7,4,1],
      [8,5,2],
      [undefined, 'stub'],
    ]
  }
}

module.exports = Mock2dArray;
