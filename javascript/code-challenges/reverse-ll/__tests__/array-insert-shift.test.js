'use strict';
const insertShiftArray = require('../../array-insert-shift/array-insert-shift');

describe('insertShiftArray', () => {
  it('should insert the value in the middle of the array', () => {
    const arr = [2, 4, 6, -8];
    const value = 5;
    const expected = [2, 4, 5, 6, -8];
    const result = insertShiftArray(arr, value);
    expect(result).toEqual(expected);
  });
  
  it('should insert the value in the middle of the array when the length is even', () => {
    const arr = [42, 8, 15, 23, 42];
    const value = 16;
    const expected = [42, 8, 15, 16, 23, 42];
    const result = insertShiftArray(arr, value);
    expect(result).toEqual(expected);
  });
});
