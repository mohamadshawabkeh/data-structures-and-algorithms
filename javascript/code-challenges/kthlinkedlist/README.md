## linked-List

## Whiteboard Picture
[Whiteboard](./codeChall07kthval.jpg)

## problem domain:
the k is the parameter which it kth from the end of the node,

## Algorithm:
We define fast and slow to make fast reach the K after if an negative integer it will throw an error and if an extra values exists if will throw exception, we then move both slow and fast pointers together until fast reaches the end of the list. Finally, slow will be pointing to the node that is k positions from the end, and we return the value of that node.

### Input & Outputs

head -> {1} -> {3} -> {8} -> {2} -> X |  K->	0 |	Output : 2
head -> {1} -> {3} -> {8} -> {2} -> X |  K->	2 |	Output : 3
head -> {1} -> {3} -> {8} -> {2} -> X |  K->	6 |	Output : Exception
