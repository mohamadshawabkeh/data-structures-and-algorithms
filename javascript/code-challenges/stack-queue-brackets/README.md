# Bracket Validator

A JavaScript function to validate if the brackets in a string are balanced.
## [Whiteboard](./Whiteboardchallenge13.jpg)

## [Test](./codechallenge13.jpg)

## Description

The `validateBrackets` function takes a string as input and determines whether the brackets in the string are balanced or not. It supports three types of brackets: round brackets `()`, square brackets `[]`, and curly brackets `{}`. The function returns a boolean value indicating if the brackets are balanced (`true`) or unbalanced (`false`).

## Examples

```javascript
const validateBrackets = require('./validateBrackets');

console.log(validateBrackets('{}')); // Output: true
console.log(validateBrackets('{}(){}')); // Output: true
console.log(validateBrackets('()[[Extra Characters]]')); // Output: true
console.log(validateBrackets('(){}[[]]')); // Output: true
console.log(validateBrackets('{}{Code}[Fellows](())')); // Output: true

console.log(validateBrackets('[({}]')); // Output: false
console.log(validateBrackets('(](')); // Output: false
console.log(validateBrackets('{(})')); // Output: false
