const LinkedList = require('./zip');

describe('LinkedList', () => {
  describe('LinkedListZip', () => {
    it('should zip two linked lists correctly', () => {
      const list1 = new LinkedList();
      list1.append(1);
      list1.append(3);
      list1.append(2);

      const list2 = new LinkedList();
      list2.append(5);
      list2.append(9);
      list2.append(4);

      const resultList = list1.LinkedListZip(list1, list2);

      // Expected result: 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> null
      let current = resultList.head;
      expect(current.data).toBe(1);
      current = current.next;
      expect(current.data).toBe(5);
      current = current.next;
      expect(current.data).toBe(3);
      current = current.next;
      expect(current.data).toBe(9);
      current = current.next;
      expect(current.data).toBe(2);
      current = current.next;
      expect(current.data).toBe(4);
      expect(current.next).toBeNull();
    });

    it('should handle empty lists correctly', () => {
      const list1 = new LinkedList();
      const list2 = new LinkedList();

      const resultList = list1.LinkedListZip(list1, list2);

      expect(resultList.head).toBeNull();
    });
  });
});
