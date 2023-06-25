# LinkedListZip

The LinkedListZip is a function that zips two linked lists together, alternating the nodes between the two lists.

## [whiteboard](./whiteboardCC08.jpg)
## [test](./codechallenge08.jpg)

## Usage

To use the LinkedListZip function, follow these steps:

1. Create instances of the LinkedList class for the two linked lists you want to zip together.
2. Populate the linked lists with data by appending nodes using the `append` method of the LinkedList class.
3. Call the LinkedListZip method on one of the instances, passing the other linked list as the argument.
4. The function will return a new linked list representing the zipped result.
5. You can then perform operations on the zipped linked list, such as printing it or accessing its nodes.

```javascript
// Example usage

const list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(2);

const list2 = new LinkedList();
list2.append(5);
list2.append(9);
list2.append(4);

const zippedList = list1.LinkedListZip(list2);
zippedList.printList(); // Output: 1 -> 5 -> 3 -> 9 -> 2 -> 4 -> tail(null)
