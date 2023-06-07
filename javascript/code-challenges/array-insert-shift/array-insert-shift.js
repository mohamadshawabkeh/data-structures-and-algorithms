'use strict';

function insertShiftArray(arr, value) {
  var middle = Math.ceil(arr.length / 2);
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (i === middle) {
      newArr.push(value);
    }
    newArr.push(arr[i]);
  }

  return newArr;
}

module.exports = insertShiftArray;
