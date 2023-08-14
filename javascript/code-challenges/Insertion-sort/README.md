# Insertion Sort Algorithm and Implementation

Insertion Sort is a simple sorting algorithm that builds a sorted array one element at a time. In this guide, we'll delve into the algorithm, step through a sample array, and provide a working JavaScript implementation.

## The Algorithm

The Insertion Sort algorithm consists of two main steps: the `insert` function and the `insertionSort` function.

### Insert Function

```javascript
function insert(sorted, value) {
  let i = 0;
  while (value > sorted[i]) {
    i++;
  }

  while (i < sorted.length) {
    let temp = sorted[i];
    sorted[i] = value;
    value = temp;
    i++;
  }

  sorted.push(value);
}

function insertionSort(input) {
  let sorted = [];
  sorted[0] = input[0];

  for (let i = 1; i < input.length; i++) {
    insert(sorted, input[i]);
  }

  return sorted;
}

```
## Visual Step-Through
Let's walk through a visual example of the Insertion Sort algorithm using the sample array [8, 4, 23, 42, 16, 15].

Pass 1: [8]
Pass 2: [4, 8]
Pass 3: [4, 8, 23]
Pass 4: [4, 8, 23, 42]
Pass 5: [4, 8, 16, 23, 42]
Pass 6: [4, 8, 15, 16, 23, 42]

### Insertion Sort
 is a simple algorithm that's effective for small input arrays or nearly sorted data. However, its quadratic time complexity makes it less efficient for larger arrays compared to more advanced sorting algorithms. Understanding its mechanics provides valuable insights into the fundamentals of sorting algorithms and their implementations.

## Efficency

### Time: O(n^2)
The basic operation of this algorithm is comparison. This will happen n * (n-1) number of times…concluding the algorithm to be n squared.
### Space: O(1)
No additional space is being created. This array is being sorted in place…keeping the space at constant O(1).