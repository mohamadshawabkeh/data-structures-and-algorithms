'use strict';

// eslint-disable-next-line no-unused-vars
function binarysearch(arr,value) {
  let fromLeft = 0;
  let fromRight = arr.length -1;

  while (fromLeft <= fromRight){
    let mid = Math.floor((fromLeft+fromRight)/2);

    if (arr[mid] === value){
      return mid;
    } else if (arr[mid] <value ) {
      fromLeft = mid +1;
    }else {
      fromRight = mid -1;
    }
  }
  return -1;
}
