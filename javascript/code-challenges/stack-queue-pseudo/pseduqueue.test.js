const PseudoQueue = require('./pseduqueue');

describe('PseudoQueue', () => {
  let pseudoQueue;

  beforeEach(() => {
    pseudoQueue = new PseudoQueue();
  });

  describe('enqueue', () => {
    it('should enqueue values in the correct order', () => {
      pseudoQueue.enqueue(10);
      pseudoQueue.enqueue(20);
      pseudoQueue.enqueue(30);
      expect(pseudoQueue.stack1.peek()).toBe(10);
    });
  });

  describe('dequeue', () => {
    it('should dequeue values in the correct order', () => {
      pseudoQueue.enqueue(10);
      pseudoQueue.enqueue(20);
      pseudoQueue.enqueue(30);
      const dequeuedValue = pseudoQueue.dequeue();
      expect(dequeuedValue).toBe(10);
    });

    it('should throw an error if queue is empty', () => {
      expect(() => pseudoQueue.dequeue()).toThrow(Error);
    });
  });
});
