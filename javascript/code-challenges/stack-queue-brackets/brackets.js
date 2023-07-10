class Stack {
  constructor() {
    this.stack = [];
  }

  push(element) {
    this.stack.push(element);
  }

  pop() {
    return this.stack.pop();
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

function validateBrackets(string) {
  const openingBrackets = '({[';
  const closingBrackets = ')}]';
  const bracketPairs = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const stack = new Stack();

  for (let char of string) {
    if (openingBrackets.includes(char)) {
      stack.push(char);
    } else if (closingBrackets.includes(char)) {
      if (stack.isEmpty() || bracketPairs[stack.pop()] !== char) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

module.exports = validateBrackets;
