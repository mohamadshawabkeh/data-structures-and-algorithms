# LinkedList

A LinkedList implementation in JavaScript.

## Overview

This LinkedList class provides a simple implementation of a linked list data structure. A linked list is a data structure that consists of a sequence of nodes, where each node contains a value and a reference to the next node in the list.

## white-board-Photo:
[White-Board](./codeChallenge06.jpg)

## Tests:

[Tests](./npmtestlink06.jpg)

## Usage

```javascript
const LinkedList = require('./LinkedList');

const list = new LinkedList();

// Append a new value to the end of the list
list.append(newValue);

// Insert a new value before the specified value in the list
list.insertBefore(value, newValue);

// Insert a new value after the specified value in the list
list.insertAfter(value, newValue);
