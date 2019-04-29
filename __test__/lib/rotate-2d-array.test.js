'use strict';

require('jest');
const Mock2dArray = require('../mock/2d-array');

const rotate2dArray = require('../../lib/rotate-2d-array');

describe('rotate2dArray()', () => {
  describe('valid input', () => {
    it('returns array of arrays with rotated values', () => {
      const m2dArr = new Mock2dArray();
      expect(rotate2dArray(m2dArr.two_x_two)).toMatchObject(m2dArr.two_x_two_r);
      expect(rotate2dArray(m2dArr.two_x_three)).toMatchObject(m2dArr.three_x_two_r);
    });
    it('returns array of arrays with rotated values,\n\t\tincluding stubs, with minimum undefined placeholder values', () => {
      const m2dArr = new Mock2dArray();
      expect(rotate2dArray(m2dArr.three_x_three_w_stub)).toMatchObject(m2dArr.three_x_three_w_stub_r);
    });
    it('returns the original when rotated 4 times, even with stubs', () => {
      const m2dArr = new Mock2dArray();
      expect( rotate2dArray( rotate2dArray( rotate2dArray( rotate2dArray( m2dArr.three_x_three_w_stub) ) ) ) )
        .toMatchObject(m2dArr.three_x_three_w_stub);
    });
  });
  describe('invalid input', () => {
    it('throws for undefined input', () => {
      expect(() => { rotate2dArray() }).toThrow('input');
    });
    it('throws for non array of arrays input', () => {
      expect(() => { rotate2dArray(1) }).toThrow('input');
      expect(() => { rotate2dArray([1]) }).toThrow('input');
    });
  });
});
