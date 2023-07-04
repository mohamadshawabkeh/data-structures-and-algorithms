# PseudoQueue

PseudoQueue is a class that implements a queue using two Stack instances internally. It provides the enqueue and dequeue operations following the first-in, first-out (FIFO) approach.

## [Whiteboard-Solution](./whiteboardCHcode11.jpg)

## Create a new instance of PseudoQueue 

```javascript
const pseudoQueue = new PseudoQueue();

// Enqueue values
pseudoQueue.enqueue(10);
pseudoQueue.enqueue(20);
pseudoQueue.enqueue(30);

// Dequeue values
console.log(pseudoQueue.dequeue()); // Output: 10
console.log(pseudoQueue.dequeue()); // Output: 20
console.log(pseudoQueue.dequeue()); // Output: 30
```
[Test-Photo](./lab11codeChallenge.jpg)