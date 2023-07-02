const Queue = require('./queue/queue');
const Stack = require('./stack/stack');

describe('Stack', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  });
  it('should successfully push onto a stack', () => {
    stack.push(10);
    expect(stack.peek()).toEqual(10);
  });
  it('should successfully push multiple values onto a stack', () => {
    stack.push(10);
    stack.push(20);
    stack.push(30);
    expect(stack.peek()).toEqual(30);
  });
  it('should successfully pop off the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.pop()).toEqual(20);
    expect(stack.peek()).toEqual(10);
  });
  it('should successfully empty a stack after multiple pops', () => {
    stack.push(10);
    stack.push(20);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });
  it('should successfully peek the next item on the stack', () => {
    stack.push(10);
    stack.push(20);
    expect(stack.peek()).toEqual(20);
  });
  it('should successfully instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

});
describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('should successfully enqueue into a queue', () => {
    queue.enqueue(10);
    expect(queue.peek()).toEqual(10);
  });

  it('should successfully enqueue multiple values into a queue', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.enqueue(30);
    expect(queue.peek()).toEqual(10);
  });

  it('should successfully dequeue out of a queue the expected value', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    expect(queue.dequeue()).toEqual(10);
    expect(queue.peek()).toEqual(20);
  });

  it('should successfully empty a queue after multiple dequeues', () => {
    queue.enqueue(10);
    queue.enqueue(20);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('should successfully instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

});
