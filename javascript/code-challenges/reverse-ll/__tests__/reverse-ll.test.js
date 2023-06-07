'use strict';

const reverse = require('../reverse-ll');

describe('Reverse', () => {
  it('should reverse the elements of the array', () => {
    expect(reverse([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
    expect(reverse(['a', 'b', 'c'])).toEqual(['c', 'b', 'a']);
  });
});

