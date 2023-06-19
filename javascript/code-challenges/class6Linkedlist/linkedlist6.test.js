'use strict';

const LinkedList = require('./linkedlist6');

describe('LinkedList', () => {
  let linkedList;

  beforeEach(() => {
    linkedList = new LinkedList();
  });

  describe('append', () => {
    test('should successfully add a node to the end of the linked list', () => {
      linkedList.append(1);
      expect(linkedList.head.value).toBe(1);
    });

    test('should successfully add multiple nodes to the end of a linked list', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.head.next.value).toBe(2);
      expect(linkedList.head.next.next.value).toBe(3);
    });
  });

  describe('insertBefore', () => {
    test('should successfully insert a node before a node located in the middle of a linked list', () => {
      linkedList.append(1);
      linkedList.append(3);
      linkedList.insertBefore(3, 2);
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.head.next.value).toBe(2);
      expect(linkedList.head.next.next.value).toBe(3);
    });

    test('should successfully insert a node before the first node of a linked list', () => {
      linkedList.append(2);
      linkedList.insertBefore(2, 1);
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.head.next.value).toBe(2);
    });
  });

  describe('insertAfter', () => {
    test('should successfully insert after a node in the middle of the linked list', () => {
      linkedList.append(1);
      linkedList.append(2);
      linkedList.insertAfter(1, 3);
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.head.next.value).toBe(3);
      expect(linkedList.head.next.next.value).toBe(2);
    });

    test('should successfully insert a node after the last node of the linked list', () => {
      linkedList.append(1);
      linkedList.insertAfter(1, 2);
      expect(linkedList.head.value).toBe(1);
      expect(linkedList.head.next.value).toBe(2);
    });
  });
});
